const POINT = 16;

function buildTemplate(blocks, edges) {
  const ids = new IdSource(blocks.map((block) => block.cellId));
  blocks.forEach((block) => assignPortIds(block, ids));
  const body = [
    '<mxCell id="0"/>',
    '<mxCell id="1" parent="0"/>',
    ...blocks.flatMap((block) => [blockCell(block), ...portCells(block, ids)]),
    ...edges.map((edge) => edgeCell(edge, blocks, ids)),
  ];
  return `<mxGraphModel><root>${body.join('')}</root></mxGraphModel>`;
}

function assignPortIds(block, ids) {
  if (block.input) block.inputCellId = ids.take();
  block.ports.forEach((port) => { port.cellId = ids.take(); });
}

function blockCell(block) {
  return cell({
    id: block.cellId,
    value: block.name,
    style: block.style,
    parent: 1,
    vertex: 1,
    connectable: 0,
    componentType: block.type,
  }, [geometry({ x: block.x, y: block.y, width: block.width, height: block.height })]);
}

function portCells(block, ids) {
  const cells = [];
  if (block.input) cells.push(pointCell(block, block.inputCellId, 'InputPoint', null, inputGeometry(), null));
  block.ports.forEach((port) => {
    const drawn = portGeometry(block.ports, port);
    if (drawn.line) {
      drawn.line.id = ids.take();
      cells.push(lineCell(block, drawn.line));
    }
    cells.push(pointCell(block, port.cellId, 'OutputPoint', port.value, drawn, port.label));
  });
  return cells;
}

function pointCell(block, id, componentType, outputValue, drawn, label) {
  return cell({
    id,
    value: label || '',
    style: drawn.style,
    vertex: 1,
    parent: block.cellId,
    componentType,
    outputPoint: componentType === 'OutputPoint' ? 1 : null,
    outputValue: outputValue == null ? null : outputValue,
  }, [geometry(drawn.box, drawn.offset)]);
}

function lineCell(block, line) {
  return cell({
    id: line.id,
    value: '',
    style: 'fontColor=#000000;rotation=90;editable=0;',
    vertex: 1,
    parent: block.cellId,
  }, [geometry(line.box, line.offset)]);
}

function edgeCell(edge, blocks, ids) {
  const source = blocks.find((block) => block.key === edge.from);
  const target = blocks.find((block) => block.key === edge.to);
  const port = source?.ports.find((item) => sameOutput(item.value, edge.output));
  if (!source || !target) throw new Error(`Ребро ${edge.from} -> ${edge.to} ссылается на неизвестный блок`);
  if (!port) throw new Error(`У блока ${source.key} нет выхода ${edge.output ?? ''}`);
  if (!target.inputCellId) throw new Error(`У блока ${target.key} нет входа`);
  return cell({
    id: ids.take(),
    value: '',
    parent: 1,
    source: port.cellId,
    target: target.inputCellId,
    edge: 1,
  }, [geometry({ x: 0, y: 0, width: 0, height: 0, relative: true })]);
}

function inputGeometry() {
  return {
    style: 'shape=ivrInputPoint;resizable=0;portConstraint=north;',
    box: { x: 0.5, y: 0, width: POINT, height: POINT, relative: true },
    offset: { x: -POINT / 2, y: -POINT / 2 },
  };
}

function portGeometry(ports, port) {
  if (port.kind === 'stack') return stackGeometry(ports, port);
  if (port.kind === 'condition-stack') return conditionStack(port);
  const half = -POINT / 2;
  const placed = placement(port);
  const labelStyle = extraStyle(port);
  return {
    style: `shape=${placed.shape};resizable=0;portConstraint=${placed.constraint};${labelStyle}`,
    box: { x: port.x ?? placed.x, y: port.y ?? placed.y, width: POINT, height: POINT, relative: true },
    offset: { x: half, y: half },
  };
}

function extraStyle(port) {
  if (port.styleExtra) return port.styleExtra;
  if (port.kind === 'left') return 'verticalLabelPosition=top;verticalAlign=bottom;';
  if (port.kind === 'right') return 'labelPosition=right;align=top;spacingBottom=36;';
  if (port.label) return 'labelPosition=right;align=bottom;spacingBottom=-36;';
  return '';
}

function placement(port) {
  if (port.kind === 'left') {
    return { shape: 'ivrOutputPointLeft', constraint: 'west', x: 0, y: 0.5 };
  }
  if (port.kind === 'right') {
    return { shape: 'ivrOutputPointRight', constraint: 'east', x: 1, y: 0.5 };
  }
  return { shape: 'ivrOutputPointDown', constraint: 'south', x: 0.5, y: 1 };
}

function stackGeometry(ports, port) {
  const index = ports.filter((item) => item.kind === 'stack').indexOf(port);
  const size = POINT * 2;
  const step = size + POINT;
  return {
    style: 'shape=ivrOutputPointRight;resizable=0;portConstraint=east;labelPosition=right;align=top;spacingBottom=36;',
    box: { x: 0.5, y: 1, width: POINT, height: POINT, relative: true },
    offset: { x: -POINT / 2, y: size + index * step },
    line: line(size, step, index),
  };
}

function conditionStack(port) {
  const index = port.stackIndex;
  const size = POINT * 2;
  const step = size + POINT;
  return {
    style: 'shape=ivrOutputPointRight;resizable=0;portConstraint=east;labelPosition=right;align=top;spacingBottom=36;',
    box: { x: 1, y: 0.5, width: POINT, height: POINT, relative: true },
    offset: { x: -POINT / 2, y: index * step - POINT / 2 },
    line: index > 0 ? line(size, step, index, true) : null,
  };
}

function line(size, step, index, condition) {
  const offsetY = condition ? index * step - size + POINT / 2 : size / 2 + index * step;
  return {
    box: { x: condition ? 1 : 0.5, y: condition ? 0.5 : 1, width: size, height: 1, relative: true },
    offset: { x: -size / 2, y: offsetY },
  };
}

function geometry(box, offset) {
  const relative = box.relative ? ' relative="1"' : '';
  const point = offset ? `<mxPoint x="${offset.x}" y="${offset.y}" as="offset"/>` : '';
  return `<mxGeometry x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}"${relative} as="geometry">${point}</mxGeometry>`;
}

function cell(attrs, children) {
  const attributes = Object.entries(attrs)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${key}="${escapeXml(value)}"`)
    .join(' ');
  if (!children.length) return `<mxCell ${attributes}/>`;
  return `<mxCell ${attributes}>${children.join('')}</mxCell>`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

function sameOutput(left, right) {
  const normalize = (value) => (value == null || value === '' ? '' : String(value));
  return normalize(left) === normalize(right);
}

class IdSource {
  constructor(reserved) {
    this.used = new Set([0, 1, ...reserved]);
    this.next = 2;
  }

  take() {
    while (this.used.has(this.next)) this.next += 1;
    const id = this.next;
    this.used.add(id);
    this.next += 1;
    return id;
  }
}

module.exports = { buildTemplate };
