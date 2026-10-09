const { callOperation } = require('./client');
const { compile } = require('./schema/compile');
const { parseModule } = require('./schema/parse');

async function getModule(id) {
  const response = await callOperation('Designer_Get', { body: { id } });
  const module = response?.Module || response;
  if (!module?.ID) throw new Error(`Модуль ${id} не найден`);
  return {
    raw: module,
    graph: parseModule(module, response.Template || module.Template),
  };
}

async function saveModule(graph) {
  assertSingleModule(graph);
  const layout = graph.layout || 'keep';
  const loaded = await getModule(graph.id);
  const compiled = compile({ ...graph, layout }, loaded?.graph);
  const menu = menuPayload(graph, loaded?.raw, compiled);
  const saved = await callOperation('Designer_Save', { body: { Menu: menu, AsVersion: !!graph.asVersion } });
  const savedId = saved?.Part?.ID || menu.ID;
  const reloaded = await getModule(savedId);
  const validation = await callOperation('Designer_Validate', { body: { Menu: reloaded.raw } });
  return { id: savedId, validation, graph: reloaded.graph };
}

function assertSingleModule(graph) {
  if (!graph.id) {
    throw new Error('Дополнительные модули не поддерживаются: одно приложение — один корневой модуль. Передай id RootModule из Application_Edit или Application_Get.');
  }
  const transfer = (graph.blocks || []).find((block) => block.type === 'Transfer' && !block.id);
  if (transfer) {
    throw new Error(`Блок ${transfer.key}: переход к модулю недоступен. Встрой логику в модуль через Marker/GoTo или вынеси её в отдельное приложение и вызови TransferToApp.`);
  }
}

function menuPayload(graph, raw, compiled) {
  return {
    ID: graph.id || 0,
    DataID: raw?.DataID || 0,
    Name: graph.name,
    Description: graph.description ?? raw?.Description ?? '',
    ApplicationDataID: graph.applicationDataId ?? raw?.ApplicationDataID ?? null,
    Variables: graph.variables ?? raw?.Variables ?? [],
    Template: compiled.template,
    Blocks: compiled.blocks,
  };
}

module.exports = { getModule, saveModule };
