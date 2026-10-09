const { blockSpec, fittedWidth } = require('./catalog');
const { resolvePorts, stackDepth, outputKey } = require('./ports');
const { placeBlocks } = require('./layout');
const { buildTemplate } = require('./xml');

const STRIPPED = ['ID', 'MenuID', 'CellID', 'Type', 'Name', 'Description', 'Log', 'Title', 'Outputs', 'ExtData'];

function compile(graph, previous) {
  const layout = graph.layout || (graph.id ? 'keep' : 'full');
  const merged = mergePrevious(graph.blocks || [], previous, layout);
  const edges = graph.edges || [];
  const blocks = merged.map((raw) => normalize(raw, edges));
  placeBlocks(blocks, edges, layout);
  assignCellIds(blocks);
  blocks.forEach((block) => { block.ports = resolvePorts(block, edges); });
  const byKey = new Map(blocks.map((block) => [block.key, block]));
  return {
    template: buildTemplate(blocks, edges),
    blocks: blocks.map((block) => toApiBlock(block, byKey, edges, graph.id || 0)),
    graph: toLogical(graph, blocks, edges, layout),
  };
}

function normalize(raw, edges) {
  const spec = blockSpec(raw.type);
  if (!raw.key) throw new Error('У блока нет key');
  const params = { ...structuredClone(spec.defaults), ...(raw.params || {}) };
  STRIPPED.forEach((field) => delete params[field]);
  const block = {
    key: raw.key,
    type: raw.type,
    name: String(raw.name || spec.title).slice(0, 50),
    description: raw.description || '',
    log: raw.log ?? spec.log,
    id: raw.id || 0,
    cellId: raw.cellId || null,
    x: raw.x ?? null,
    y: raw.y ?? null,
    width: raw.width || fittedWidth(String(raw.name || spec.title).slice(0, 50), spec.width),
    height: raw.height || spec.height,
    style: spec.style,
    input: spec.input,
    params,
    outputIds: raw.outputIds || {},
    previousStack: raw.previousStack,
    stack: 0,
    ports: [],
  };
  block.ports = resolvePorts(block, edges);
  block.stack = stackDepth(block.ports);
  return block;
}

function mergePrevious(blocks, previous, layout) {
  if (!previous) return blocks;
  const byKey = new Map(previous.blocks.map((block) => [block.key, block]));
  const byId = new Map(previous.blocks.map((block) => [block.id, block]));
  return blocks.map((raw) => {
    const prev = byKey.get(raw.key) || byId.get(raw.id);
    if (!prev) return raw;
    return {
      ...raw,
      id: raw.id || prev.id,
      cellId: raw.cellId || prev.cellId,
      x: layout === 'full' ? null : (raw.x ?? prev.x),
      y: layout === 'full' ? null : (raw.y ?? prev.y),
      width: layout === 'full' ? null : (raw.width ?? prev.width),
      height: layout === 'full' ? null : (raw.height ?? prev.height),
      outputIds: prev.outputIds || {},
      previousStack: prev.stack,
    };
  });
}

function assignCellIds(blocks) {
  const used = new Set([0, 1]);
  blocks.forEach((block) => {
    if (block.cellId && !used.has(Number(block.cellId))) used.add(Number(block.cellId));
    else block.cellId = null;
  });
  let next = 2;
  const take = () => {
    while (used.has(next)) next += 1;
    const id = next;
    used.add(id);
    next += 1;
    return id;
  };
  blocks.forEach((block) => {
    if (!block.cellId) block.cellId = take();
    if (!block.id || block.id <= 0) block.id = -block.cellId;
  });
}

function toApiBlock(block, byKey, edges, menuId) {
  return {
    ID: block.id,
    MenuID: menuId,
    CellID: block.cellId,
    Type: block.type,
    Name: block.name,
    Title: block.name,
    Description: block.description,
    Log: !!block.log,
    ExtData: JSON.stringify(block.params),
    Outputs: block.ports.map((port) => outputRecord(block, port, byKey, edges)),
  };
}

function outputRecord(block, port, byKey, edges) {
  const key = outputKey(port.value);
  const edge = edges.find((item) => item.from === block.key && outputKey(item.output) === key);
  const target = edge ? byKey.get(edge.to) : null;
  return {
    ID: block.outputIds[key] || 0,
    BlockID: block.id,
    OutputID: key,
    NextBlockID: target ? target.id : null,
  };
}

function toLogical(graph, blocks, edges, layout) {
  return {
    id: graph.id || 0,
    applicationDataId: graph.applicationDataId ?? null,
    name: graph.name,
    description: graph.description || '',
    layout,
    variables: graph.variables || [],
    blocks: blocks.map((block) => ({
      key: block.key,
      id: block.id,
      cellId: block.cellId,
      type: block.type,
      name: block.name,
      description: block.description,
      log: block.log,
      x: block.x,
      y: block.y,
      width: block.width,
      height: block.height,
      stack: block.stack,
      params: block.params,
    })),
    edges,
  };
}

module.exports = { compile };
