const fs = require('fs');
const path = require('path');
const { loadEnv } = require('../env');
const { callOperation } = require('../client');

loadEnv();

const WANTED = new Set(['DtmfMenu', 'Condition', 'CC', 'CC_IPN', 'Calendar', 'ListCheck', 'DataChange', 'Sound']);

async function main() {
  const apps = await callOperation('Api_GetAllActiveApplications');
  const published = (apps || []).filter((app) => (app.Numbers || []).length || (app.Masks || []).length);
  const dir = path.join(__dirname, '../fixtures');
  fs.mkdirSync(dir, { recursive: true });
  const saved = [];
  for (const app of published) {
    if (saved.length >= 6) break;
    const modules = await callOperation('Designer_GetModulesSelectData', {
      body: { applicationID: app.AppVersionId, q: '', onlyUsed: true, useDataIDAsID: false },
    });
    const items = modules.results || modules.Results || [];
    for (const item of items) {
      if (saved.length >= 6) break;
      const response = await callOperation('Designer_Get', { body: { id: Number(item.id) } });
      const types = [...new Set((response.Module?.Blocks || []).map((block) => block.Type))];
      if (!types.some((type) => WANTED.has(type)) && saved.length > 2) continue;
      const file = path.join(dir, `module-${item.id}.json`);
      fs.writeFileSync(file, `${JSON.stringify({
        appId: app.AppId,
        versionId: app.AppVersionId,
        numbers: app.Numbers,
        response,
      }, null, 2)}\n`);
      saved.push({ id: item.id, types });
    }
  }
  process.stdout.write(`${JSON.stringify(saved, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
