const operations = [
  ...require('./openapi/operations.json'),
  ...require('./openapi/extra-operations.json'),
];

const byId = new Map(operations.map((operation) => [operation.id, operation]));

function searchOperations(query) {
  const needle = String(query || '').trim().toLowerCase();
  if (!needle) return { count: operations.length, hint: 'Передайте query: часть operationId, пути или описания' };
  return operations
    .filter((operation) => `${operation.id} ${operation.path} ${operation.summary}`.toLowerCase().includes(needle))
    .slice(0, 30)
    .map(({ id, method, path, summary, query: queryNames, body }) => ({
      id, method, path, summary, query: queryNames, body,
    }));
}

async function callOperation(operationId, args = {}) {
  const operation = byId.get(operationId);
  if (!operation) throw new Error(`Операция не найдена: ${operationId}`);
  const { accessToken } = require('./auth');
  const token = await accessToken();
  const url = new URL(`${baseUrl()}/${operation.path}`);
  appendQuery(url, args.query);
  const response = await fetch(url, {
    method: operation.method,
    headers: headers(token, operation),
    body: operation.body ? JSON.stringify(args.body ?? {}) : undefined,
  });
  const text = await response.text();
  const payload = parseJson(text);
  if (!response.ok) throw new Error(`${operation.id} вернул ${response.status}: ${text.slice(0, 800)}`);
  return payload;
}

function appendQuery(url, query) {
  Object.entries(query || {}).forEach(([key, value]) => {
    if (value == null) return;
    const values = Array.isArray(value) ? value : [value];
    values.forEach((item) => url.searchParams.append(key, String(item)));
  });
}

function headers(token, operation) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    ...(operation.body ? { 'Content-Type': 'application/json' } : {}),
  };
}

function baseUrl() {
  return (process.env.ISIVR_BASE_URL || 'http://localhost:5001').replace(/\/$/, '');
}

function parseJson(text) {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

module.exports = { searchOperations, callOperation, baseUrl };
