const { XMLParser } = require('fast-xml-parser');
const { TYPES } = require('./catalog');
const { outputKey } = require('./ports');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) => name === 'mxCell' || name === 'mxPoint',
});

const BLOCK_TYPES = new Set(TYPES);

function parseModule(module, template) {
  const visual = parseTemplate(template || module.Template || '');
  const visualByCell = new Map(visual.blocks.map((block) => [block.cellId, block]));
  const blocks = (module.Blocks || []).map((block) => logicalBlock(block, visualByCell.get(Number(block.CellID))));
  const byId = new Map(blocks.map((block) => [block.id, block]));
  return {
    id: module.ID,
    dataId: module.DataID,
    applicationDataId: module.ApplicationDataID ?? null,
    name: module.Name,
    description: module.Description || '',
    variables: module.Variables || [],
    blocks,
    edges: logicalEdges(module.Blocks || [], byId),
  };
}

function logicalBlock(block, visual) {
  return {
    key: `b${block.ID}`,
    id: block.ID,
    cellId: block.CellID,
    type: block.Type,
    name: block.Name,
    description: block.Description || '',
    log: !!block.Log,
    x: visual?.x ?? null,
    y: visual?.y ?? null,
    width: visual?.width || null,
    height: visual?.height || null,
    stack: visual?.stack || 0,
    params: parseExt(block.ExtData),
    outputIds: Object.fromEntries((block.Outputs || []).map((output) => [output.OutputID ?? '', output.ID])),
  };
}

function logicalEdges(blocks, byId) {
  const edges = [];
  blocks.forEach((block) => {
    (block.Outputs || []).forEach((output) => {
      const target = byId.get(output.NextBlockID);
      if (!target) return;
      edges.push({
        from: `b${block.ID}`,
        to: target.key,
        output: output.OutputID ? output.OutputID : null,
      });
    });
  });
  return edges;
}

function parseTemplate(xml) {
  if (!xml) return { blocks: [], edges: [] };
  const document = parser.parse(xml);
  const root = cellsOf(document.mxGraphModel?.root);
  const blocks = root.filter((cell) => BLOCK_TYPES.has(attr(cell, 'componentType'))).map((cell) => visualBlock(cell, root));
  const ports = new Map();
  blocks.forEach((block) => block.outputs.forEach((port) => ports.set(port.cellId, { block, port })));
  const inputs = new Map();
  blocks.forEach((block) => { if (block.inputCellId) inputs.set(block.inputCellId, block); });
  const edges = root.filter((cell) => attr(cell, 'edge') != null).map((cell) => ({
    source: ports.get(numberAttr(cell, 'source')),
    target: inputs.get(numberAttr(cell, 'target')),
  })).filter((edge) => edge.source && edge.target);
  return { blocks, edges };
}

function visualBlock(cell, root) {
  const geometry = cell.mxGeometry || {};
  const children = childrenOf(cell, root);
  const outputs = children.filter((child) => attr(child, 'componentType') === 'OutputPoint').map(visualPort);
  const input = children.find((child) => attr(child, 'componentType') === 'InputPoint');
  return {
    cellId: numberAttr(cell, 'id'),
    type: attr(cell, 'componentType'),
    style: attr(cell, 'style') || '',
    x: numberAttr(geometry, 'x'),
    y: numberAttr(geometry, 'y'),
    width: numberAttr(geometry, 'width'),
    height: numberAttr(geometry, 'height'),
    inputCellId: input ? numberAttr(input, 'id') : null,
    outputs,
    stack: outputs.filter((port) => port.stacked).length,
  };
}

function childrenOf(cell, root) {
  const id = attr(cell, 'id');
  const flat = root.filter((item) => attr(item, 'parent') === id);
  return flat.length ? flat : cellsOf(cell);
}

function visualPort(cell) {
  const geometry = cell.mxGeometry || {};
  const offset = (geometry.mxPoint || [])[0] || {};
  const offsetY = numberAttr(offset, 'y');
  return {
    cellId: numberAttr(cell, 'id'),
    value: attr(cell, 'outputValue') ?? null,
    stacked: numberAttr(geometry, 'y') === 1 && offsetY > 0,
  };
}

function parseExt(value) {
  if (!value) return {};
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}

function cellsOf(node) {
  if (!node?.mxCell) return [];
  return Array.isArray(node.mxCell) ? node.mxCell : [node.mxCell];
}

function attr(node, name) {
  if (!node) return null;
  const value = node[`@_${name}`];
  return value == null ? null : String(value);
}

function numberAttr(node, name) {
  const value = attr(node, name);
  return value == null ? 0 : Number(value);
}

module.exports = { parseModule, parseTemplate, outputKey };
