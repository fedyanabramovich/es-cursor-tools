const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../../../../isivr/ISIVR.ApiTests/Generated/ApiClient.cs');
const source = fs.readFileSync(sourcePath, 'utf8');
const operations = [];
const pathRe = /Operation Path: "([^"]+)"/g;
let match = pathRe.exec(source);

while (match) {
  const before = source.slice(Math.max(0, match.index - 8000), match.index);
  const after = source.slice(match.index, match.index + 1800);
  const name = [...before.matchAll(/(\w+)Async\(/g)].at(-1)?.[1];
  const method = [...before.matchAll(/HttpMethod\("([A-Z]+)"\)/g)].at(-1)?.[1];
  const summary = [...before.matchAll(/\/\/\/ (?!<)([^\n]+)/g)]
    .map((item) => item[1].trim())
    .filter((line) => line && !line.startsWith('param '))
    .at(-1) || '';
  const query = [...after.matchAll(/EscapeDataString\("([^"]+)"\)/g)].map((item) => item[1]);
  if (name && method) {
    operations.push({
      id: name,
      method,
      path: match[1],
      summary,
      query: [...new Set(query)],
      body: /SerializeObject/.test(before.slice(-800)) || /SerializeObject/.test(after.slice(0, 500)),
    });
  }
  match = pathRe.exec(source);
}

const output = path.join(__dirname, '../openapi/operations.json');
// Календарные операции, которых нет в swagger, живут в extra-operations.json и этим скриптом не трогаются.
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(operations, null, 2)}\n`);
process.stderr.write(`${operations.length} operations\n`);
