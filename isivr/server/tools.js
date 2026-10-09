const { searchOperations, callOperation } = require('./client');
const { getModule, saveModule } = require('./modules');
const { uploadSound } = require('./sounds');

const tools = [
  tool('isivr_operations', 'Найти операцию API ISIVR по имени, пути или описанию. Каталог — swagger плюс операции из extra-operations.json, которых в swagger нет: календари, звуки, динамические параметры, функции и таблицы маршрутизации.', {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Часть operationId, пути или описания. Пустой запрос не возвращает весь список.' },
    },
  }, (args) => searchOperations(args.query)),
  tool('isivr_call', 'Вызвать операцию API ISIVR по operationId из isivr_operations. Тело — JSON, имена полей как у сервера. Загрузка файлов не поддерживается.', {
    type: 'object',
    properties: {
      operation: { type: 'string', description: 'operationId, например Application_Edit или Designer_Get' },
      body: { type: 'object', description: 'JSON-тело POST' },
      query: { type: 'object', description: 'Параметры query string' },
    },
    required: ['operation'],
  }, (args) => callOperation(args.operation, args)),
  tool('isivr_get_module', 'Прочитать модуль как логическую схему: блоки, параметры, рёбра и координаты. XML Template не возвращает.', {
    type: 'object',
    properties: {
      id: { type: 'number', description: 'ID модуля' },
    },
    required: ['id'],
  }, (args) => getModule(args.id).then((loaded) => loaded.graph)),
  tool('isivr_save_module', 'Сохранить корневой модуль приложения. Одно приложение — один модуль: дополнительные модули и новые блоки Transfer не поддерживаются; общую логику встраивай через Marker/GoTo или выноси в отдельное приложение с TransferToApp. Координаты считает сервер. layout=full раскладывает заново, keep сохраняет текущие позиции, incremental двигает только новые блоки. По умолчанию keep.', {
    type: 'object',
    properties: {
      id: { type: 'number', description: 'ID корневого модуля (RootModule.ID из Application_Edit или Application_Get)' },
      applicationDataId: { type: 'number', description: 'DataID приложения' },
      name: { type: 'string' },
      description: { type: 'string' },
      layout: { type: 'string', enum: ['full', 'keep', 'incremental'] },
      variables: { type: 'array' },
      blocks: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            key: { type: 'string' },
            id: { type: 'number' },
            cellId: { type: 'number', description: 'Необязательный номер ячейки. Задай его метке, чтобы GoTo мог сослаться на неё через MarkerBlockCellID в том же сохранении. Должен быть уникален в модуле.' },
            type: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            params: { type: 'object' },
          },
          required: ['key', 'type'],
        },
      },
      edges: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            from: { type: 'string' },
            to: { type: 'string' },
            output: { type: 'string', description: 'Имя выхода. null или пусто — единственный выход' },
          },
          required: ['from', 'to'],
        },
      },
    },
    required: ['id', 'name', 'blocks', 'edges'],
  }, (args) => saveModule(args)),
  tool('isivr_upload_sound', 'Загрузить локальный аудиофайл и создать звук в приложении. Сервер конвертирует файл в WAV. В блоках используйте DataID из ответа.', {
    type: 'object',
    properties: {
      filePath: { type: 'string', description: 'Абсолютный путь к аудиофайлу' },
      applicationDataId: { type: 'number', description: 'DataID приложения' },
      name: { type: 'string', description: 'Имя звука, уникальное в приложении, до 100 символов' },
      description: { type: 'string', description: 'Описание, до 100 символов' },
      tags: { type: 'string', description: 'Теги, до 50 символов' },
    },
    required: ['filePath', 'applicationDataId', 'name'],
  }, (args) => uploadSound(args)),
];

function tool(name, description, inputSchema, handler) {
  return { name, description, inputSchema, handler };
}

function listTools() {
  return tools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema }));
}

async function callTool(name, args) {
  const found = tools.find((item) => item.name === name);
  if (!found) throw new Error(`Инструмент не найден: ${name}`);
  const result = await found.handler(args || {});
  return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
}

module.exports = { listTools, callTool };
