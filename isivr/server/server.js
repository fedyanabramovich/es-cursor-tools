const { loadEnv } = require('./env');

loadEnv();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { listTools, callTool } = require('./tools');

const SUPPORTED_PROTOCOLS = ['2024-11-05', '2025-03-26', '2025-06-18'];
let buffer = Buffer.alloc(0);

process.stderr.write('isivr listening\n');
process.stdin.on('data', (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  try {
    drain();
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
  }
});

function drain() {
  const end = buffer.indexOf('\n');
  if (end === -1) return;
  const line = buffer.slice(0, end).toString('utf8').replace(/\r$/, '');
  buffer = buffer.slice(end + 1);
  if (line.trim()) handleMessage(JSON.parse(line));
  drain();
}

function handleMessage(message) {
  process.stderr.write(`isivr ${message.method || 'response'}\n`);
  if (message.id == null) return;
  dispatch(message).then(
    (result) => send({ jsonrpc: '2.0', id: message.id, result }),
    (error) => send({ jsonrpc: '2.0', id: message.id, error: { code: -32603, message: error.message } }),
  );
}

async function dispatch(message) {
  if (message.method === 'initialize') return initialize(message.params || {});
  if (message.method === 'ping') return {};
  if (message.method === 'tools/list') return { tools: listTools() };
  if (message.method === 'tools/call') return callTool(message.params.name, message.params.arguments);
  throw new Error(`Метод не поддерживается: ${message.method}`);
}

function initialize(params) {
  const requested = params.protocolVersion;
  const protocolVersion = SUPPORTED_PROTOCOLS.includes(requested) ? requested : SUPPORTED_PROTOCOLS[0];
  return {
    protocolVersion,
    capabilities: { tools: {} },
    serverInfo: { name: 'isivr', version: '0.1.0' },
  };
}

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}
