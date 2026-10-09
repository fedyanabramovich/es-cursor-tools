const path = require('path');

const mcpDir = path.join(__dirname, '../../../server');
const { loadEnv } = require(path.join(mcpDir, 'env'));

loadEnv();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { callOperation } = require(path.join(mcpDir, 'client'));

const CONCURRENCY = 8;

async function main() {
  const apps = await loadPublishedApps();
  const moduleRefs = await loadModuleRefs(apps);
  const modules = await mapConcurrent([...moduleRefs.values()], loadModule, CONCURRENCY);
  const report = analyze(apps, modules.filter(Boolean));
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

async function loadPublishedApps() {
  const apps = await callOperation('Api_GetAllActiveApplications');
  return apps.filter((app) => app.Masks?.length || app.Numbers?.length);
}

async function loadModuleRefs(apps) {
  const refs = new Map();
  await mapConcurrent(apps, async (app) => {
    const response = await callOperation('Designer_GetModulesSelectData', {
      body: {
        applicationID: app.AppVersionId,
        onlyUsed: true,
        useDataIDAsID: false,
        q: '',
      },
    });
    for (const item of response.results || response.Results || []) {
      refs.set(Number(item.id), {
        id: Number(item.id),
        appId: app.AppId,
        appVersionId: app.AppVersionId,
        app: app.Description,
        module: item.text,
      });
    }
  }, CONCURRENCY);
  return refs;
}

async function loadModule(ref) {
  try {
    const response = await callOperation('Designer_Get', { body: { id: ref.id } });
    return { ...ref, data: response.Module };
  } catch (error) {
    return { ...ref, error: error.message };
  }
}

function analyze(apps, modules) {
  const valid = modules.filter((module) => module.data);
  return {
    generatedAt: new Date().toISOString(),
    totals: totals(apps, modules, valid),
    blockUsage: blockUsage(valid),
    edgePatterns: edgePatterns(valid),
    topologyPatterns: topologyPatterns(valid),
    startPatterns: startPatterns(valid),
    parameterFields: parameterFields(valid),
    parameterPaths: parameterPaths(valid),
    variables: variableStats(valid),
    unresolved: modules.filter((module) => module.error),
  };
}

function totals(apps, modules, valid) {
  return {
    publishedApplications: apps.length,
    applicationVersions: new Set(apps.map((app) => app.AppVersionId)).size,
    referencedModules: modules.length,
    loadedModules: valid.length,
    blocks: valid.reduce((sum, module) => sum + module.data.Blocks.length, 0),
  };
}

function blockUsage(modules) {
  const total = new Map();
  const moduleCount = new Map();
  for (const module of modules) {
    const seen = new Set();
    for (const block of module.data.Blocks) {
      increment(total, block.Type);
      seen.add(block.Type);
    }
    seen.forEach((type) => increment(moduleCount, type));
  }
  return [...total.entries()]
    .map(([type, blocks]) => ({ type, blocks, modules: moduleCount.get(type) }))
    .sort((left, right) => right.blocks - left.blocks);
}

function edgePatterns(modules) {
  const counts = new Map();
  for (const module of modules) {
    const byId = new Map(module.data.Blocks.map((block) => [block.ID, block]));
    for (const block of module.data.Blocks) {
      for (const output of block.Outputs || []) {
        const target = byId.get(output.NextBlockID);
        if (!target) continue;
        const key = `${block.Type}.${output.OutputID || 'default'} -> ${target.Type}`;
        increment(counts, key);
      }
    }
  }
  return top(counts, 80);
}

function topologyPatterns(modules) {
  const patterns = new Map();
  for (const module of modules) {
    const types = new Set(module.data.Blocks.map((block) => block.Type));
    for (const pattern of classify(types)) {
      if (!patterns.has(pattern)) patterns.set(pattern, { count: 0, examples: [] });
      const entry = patterns.get(pattern);
      entry.count += 1;
      if (entry.examples.length < 5) {
        entry.examples.push({
          appVersionId: module.appVersionId,
          moduleId: module.id,
          name: module.app,
        });
      }
    }
  }
  return [...patterns.entries()]
    .map(([pattern, value]) => ({ pattern, ...value }))
    .sort((left, right) => right.count - left.count);
}

function classify(types) {
  const result = [];
  if (types.has('Condition')) result.push('conditional-routing');
  if (types.has('DtmfMenu')) result.push('dtmf-menu');
  if (types.has('InputField')) result.push('collect-and-validate-input');
  if (types.has('CC_IPN')) result.push('ipn-queue');
  if (types.has('CC')) result.push('external-call');
  if (types.has('SetTimer') || types.has('ResetTimer')) result.push('timer');
  if (types.has('TransferToApp')) result.push('application-composition');
  if (types.has('Calendar') || types.has('HolidayPeriod')) result.push('schedule-routing');
  if (types.has('DefRouting')) result.push('routing-table');
  if (types.has('ListCheck')) result.push('dynamic-list');
  if (types.has('DynamicParams') || types.has('DataChange')) result.push('dynamic-parameters');
  if (types.has('Function')) result.push('external-integration');
  if (types.has('PlayEWT')) result.push('ewt-announcement');
  if (!result.length) result.push('linear');
  return result;
}

function startPatterns(modules) {
  const counts = new Map();
  for (const module of modules) {
    const blocks = module.data.Blocks;
    const byId = new Map(blocks.map((block) => [block.ID, block]));
    const start = blocks.find((block) => block.Type === 'Start');
    if (!start) continue;
    const sequence = walkMain(start, byId);
    increment(counts, sequence.join(' -> '));
  }
  return top(counts, 30);
}

function walkMain(start, byId) {
  const sequence = [];
  const visited = new Set();
  let block = start;
  while (block && sequence.length < 6 && !visited.has(block.ID)) {
    visited.add(block.ID);
    sequence.push(block.Type);
    const outputs = block.Outputs || [];
    const preferred = outputs.find((output) => output.OutputID === '')
      || outputs.find((output) => output.OutputID === 'true')
      || outputs[0];
    block = preferred ? byId.get(preferred.NextBlockID) : null;
  }
  return sequence;
}

function parameterFields(modules) {
  const fields = new Map();
  for (const module of modules) {
    for (const block of module.data.Blocks) {
      const params = parseJson(block.ExtData);
      if (!fields.has(block.Type)) fields.set(block.Type, new Map());
      for (const key of Object.keys(params)) increment(fields.get(block.Type), key);
    }
  }
  return [...fields.entries()]
    .map(([type, values]) => ({ type, fields: top(values, 100) }))
    .sort((left, right) => left.type.localeCompare(right.type));
}

function parameterPaths(modules) {
  const paths = new Map();
  for (const module of modules) {
    for (const block of module.data.Blocks) {
      if (!paths.has(block.Type)) paths.set(block.Type, new Map());
      visitValue(paths.get(block.Type), '', parseJson(block.ExtData));
    }
  }
  return [...paths.entries()]
    .map(([type, values]) => ({ type, paths: top(values, 160) }))
    .sort((left, right) => left.type.localeCompare(right.type));
}

function visitValue(paths, prefix, value) {
  if (Array.isArray(value)) {
    increment(paths, `${prefix}[]:array`);
    value.slice(0, 20).forEach((item) => visitValue(paths, `${prefix}[]`, item));
    return;
  }
  if (value && typeof value === 'object') {
    if (prefix) increment(paths, `${prefix}:object`);
    Object.entries(value).forEach(([key, item]) => {
      visitValue(paths, prefix ? `${prefix}.${key}` : key, item);
    });
    return;
  }
  increment(paths, `${prefix}:${value === null ? 'null' : typeof value}`);
}

function variableStats(modules) {
  const types = new Map();
  let count = 0;
  for (const module of modules) {
    for (const variable of module.data.Variables || []) {
      count += 1;
      increment(types, variable.Type || variable.type || 'unknown');
    }
  }
  return { count, types: top(types, 20) };
}

function parseJson(value) {
  try {
    return JSON.parse(value || '{}');
  } catch {
    return {};
  }
}

function increment(map, key) {
  map.set(key, (map.get(key) || 0) + 1);
}

function top(map, limit) {
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name))
    .slice(0, limit);
}

async function mapConcurrent(items, worker, concurrency) {
  const results = new Array(items.length);
  let index = 0;
  async function run() {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await worker(items[current]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return results;
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
