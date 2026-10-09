const { test } = require('node:test');
const assert = require('node:assert/strict');
const { compile } = require('../schema/compile');
const { parseTemplate } = require('../schema/parse');

test('full layout places condition branches left to right without overlap', () => {
  const compiled = compile(branchGraph());
  const blocks = byKey(compiled.graph.blocks);
  assert.ok(blocks.start.y < blocks.check.y);
  assert.ok(blocks.check.y < blocks.no.y);
  assert.equal(blocks.no.y, blocks.yes.y);
  assert.ok(blocks.no.x < blocks.yes.x);
  assert.ok(blocks.no.x + 240 <= blocks.yes.x);
});

test('full layout places stacked menu targets from right to left', () => {
  const compiled = compile(menuGraph());
  const blocks = byKey(compiled.graph.blocks);
  assert.ok(blocks.menu.y < blocks.one.y);
  assert.equal(blocks.one.y, blocks.two.y);
  assert.equal(blocks.two.y, blocks.miss.y);
  assert.ok(blocks.miss.x >= blocks.menu.x + blocks.menu.width);
  assert.ok(blocks.miss.x < blocks.two.x);
  assert.ok(blocks.two.x + blocks.two.width <= blocks.one.x);
});

test('full layout centers a block under the only output', () => {
  const compiled = compile({
    name: 'line',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'answer', type: 'AnswerCall' },
      { key: 'menu', type: 'DtmfMenu', params: { Sounds: ['1'] } },
    ],
    edges: [
      { from: 'start', output: null, to: 'answer' },
      { from: 'answer', output: null, to: 'menu' },
    ],
  });
  const blocks = byKey(compiled.graph.blocks);
  assert.equal(center(blocks.start), center(blocks.answer));
  assert.equal(center(blocks.answer), center(blocks.menu));
});

test('keep layout preserves coordinates and cell ids', () => {
  const compiled = compile({
    id: 7,
    layout: 'keep',
    name: 'saved',
    blocks: [
      { key: 'start', type: 'Start', id: 11, cellId: 4, x: 15, y: 25 },
      { key: 'end', type: 'End', id: 12, cellId: 8, x: 15, y: 300 },
    ],
    edges: [{ from: 'start', output: null, to: 'end' }],
  });
  const blocks = byKey(compiled.graph.blocks);
  assert.equal(blocks.start.x, 15);
  assert.equal(blocks.start.y, 25);
  assert.equal(blocks.end.y, 300);
  assert.equal(blocks.start.cellId, 4);
  assert.equal(blocks.start.id, 11);
  const apiStart = compiled.blocks.find((block) => block.Type === 'Start');
  assert.equal(apiStart.CellID, 4);
  assert.equal(JSON.parse(apiStart.ExtData).Name, undefined);
});

test('template stores ports and edges after vertices', () => {
  const compiled = compile({
    name: 'line',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'sound', type: 'Sound', params: { SoundGroupID: 5 } },
      { key: 'end', type: 'End' },
    ],
    edges: [
      { from: 'start', output: null, to: 'sound' },
      { from: 'sound', output: null, to: 'end' },
    ],
  });
  const start = compiled.blocks.find((block) => block.Type === 'Start');
  assert.equal(start.CellID, -start.ID);
  assert.ok(compiled.template.indexOf('edge="1"') > compiled.template.lastIndexOf('componentType='));
  const visual = parseTemplate(compiled.template);
  const drawn = Object.fromEntries(visual.blocks.map((block) => [block.type, block]));
  const logical = byKey(compiled.graph.blocks);
  assert.equal(drawn.Start.x, logical.start.x);
  assert.equal(drawn.Start.y, logical.start.y);
  assert.match(drawn.Start.style, /customPink/);
  assert.match(drawn.Start.style, /terminator/);
  assert.equal(visual.edges.length, 2);
  assert.equal(visual.edges[0].source.block.type, 'Start');
  assert.equal(visual.edges[0].target.type, 'Sound');
  assert.equal(visual.edges[1].target.type, 'End');
});

test('editing an existing module keeps positions, ids and output ids', () => {
  const compiled = compile({
    id: 7,
    layout: 'keep',
    name: 'saved',
    blocks: [
      { key: 'b1', type: 'Start' },
      { key: 'b2', type: 'End' },
    ],
    edges: [{ from: 'b1', output: null, to: 'b2' }],
  }, {
    blocks: [
      { key: 'b1', id: 11, cellId: 4, x: 15, y: 25, outputIds: { '': 100 }, stack: 0 },
      { key: 'b2', id: 12, cellId: 8, x: 15, y: 300, outputIds: {}, stack: 0 },
    ],
  });
  const start = compiled.blocks.find((block) => block.Type === 'Start');
  assert.equal(start.ID, 11);
  assert.equal(start.CellID, 4);
  assert.equal(start.Outputs[0].ID, 100);
  assert.equal(start.Outputs[0].NextBlockID, 12);
  assert.equal(compiled.graph.blocks[0].x, 15);
  assert.equal(compiled.graph.blocks[0].y, 25);
});

test('full layout keeps a menu target beside the menu when a later block links back', () => {
  const compiled = compile({
    name: 'loop',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'menu', type: 'DtmfMenu', params: { Sounds: ['1'], OutputsData: ['1', '9'].map((id) => ({ ID: id, Value: true })) } },
      { key: 'queue', type: 'CC_IPN' },
      { key: 'route', type: 'DefRouting' },
    ],
    edges: [
      { from: 'start', output: null, to: 'menu' },
      { from: 'menu', output: '1', to: 'queue' },
      { from: 'menu', output: '9', to: 'route' },
      { from: 'route', output: null, to: 'queue' },
    ],
  });
  const blocks = byKey(compiled.graph.blocks);
  assert.ok(blocks.queue.y >= blocks.route.y + blocks.route.height);
  assert.ok(blocks.queue.x >= blocks.menu.x + blocks.menu.width);
});

test('full layout places a shared target below blocks that enter it', () => {
  const compiled = compile({
    name: 'wait',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'menu', type: 'DtmfMenu', params: { Sounds: ['1'], OutputsData: ['1', '2'].map((id) => ({ ID: id, Value: true })) } },
      { key: 'one', type: 'Sound', params: { SoundGroupID: 1 } },
      { key: 'two', type: 'Sound', params: { SoundGroupID: 2 } },
      { key: 'wait', type: 'InfinityWait' },
    ],
    edges: [
      { from: 'start', output: null, to: 'menu' },
      { from: 'menu', output: '1', to: 'one' },
      { from: 'menu', output: '2', to: 'two' },
      { from: 'one', output: null, to: 'wait' },
      { from: 'two', output: null, to: 'wait' },
    ],
  });
  const blocks = byKey(compiled.graph.blocks);
  assert.ok(blocks.wait.y >= blocks.one.y + blocks.one.height);
  assert.ok(blocks.wait.y >= blocks.two.y + blocks.two.height);
});

test('full layout places a marker centered above its target below the jump', () => {
  const compiled = compile({
    name: 'mark',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'end', type: 'End' },
      { key: 'marker', type: 'Marker', cellId: 20 },
      { key: 'jump', type: 'GoTo', params: { MarkerBlockCellID: 20 } },
    ],
    edges: [
      { from: 'start', output: null, to: 'jump' },
      { from: 'marker', output: null, to: 'end' },
    ],
  });
  const blocks = byKey(compiled.graph.blocks);
  const middle = (block) => block.x + block.width / 2;
  assert.ok(Math.abs(middle(blocks.marker) - middle(blocks.end)) <= 1);
  assert.ok(blocks.marker.y + blocks.marker.height < blocks.end.y);
  assert.ok(blocks.marker.y > blocks.jump.y + blocks.jump.height);
});

test('omitted width grows so a long name fits inside the block', () => {
  const name = 'Перевод на QA: Тестовое приложение 1';
  const compiled = compile({
    name: 'fit',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'jump', type: 'TransferToApp', name },
    ],
    edges: [{ from: 'start', output: null, to: 'jump' }],
  });
  const block = byKey(compiled.graph.blocks).jump;
  assert.ok(block.width >= 48 + 13 * name.length);
});

test('incremental layout keeps an existing block and places the new one below', () => {
  const compiled = compile({
    layout: 'incremental',
    name: 'edit',
    blocks: [
      { key: 'start', type: 'Start', x: 80, y: 40 },
      { key: 'end', type: 'End' },
    ],
    edges: [{ from: 'start', output: null, to: 'end' }],
  });
  const blocks = byKey(compiled.graph.blocks);
  assert.equal(blocks.start.x, 80);
  assert.equal(blocks.start.y, 40);
  assert.equal(blocks.end.x, 80);
  assert.ok(blocks.end.y >= blocks.start.y + 72);
});

function branchGraph() {
  return {
    name: 'branches',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'check', type: 'Condition' },
      { key: 'no', type: 'End' },
      { key: 'yes', type: 'End' },
    ],
    edges: [
      { from: 'start', output: null, to: 'check' },
      { from: 'check', output: 'false', to: 'no' },
      { from: 'check', output: 'true', to: 'yes' },
    ],
  };
}

function menuGraph() {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#'];
  return {
    name: 'menu',
    layout: 'full',
    blocks: [
      { key: 'start', type: 'Start' },
      { key: 'menu', type: 'DtmfMenu', params: { Sounds: ['1'], OutputsData: buttons.map((id) => ({ ID: id, Value: id === '1' || id === '2' })) } },
      { key: 'one', type: 'EndCall', params: { Code: '16' } },
      { key: 'two', type: 'End' },
      { key: 'miss', type: 'End' },
    ],
    edges: [
      { from: 'start', output: null, to: 'menu' },
      { from: 'menu', output: '1', to: 'one' },
      { from: 'menu', output: '2', to: 'two' },
      { from: 'menu', output: 'NoInput', to: 'miss' },
      { from: 'menu', output: 'NoMatch', to: 'miss' },
    ],
  };
}

function center(block) {
  return block.x + block.width / 2;
}

function byKey(blocks) {
  return Object.fromEntries(blocks.map((block) => [block.key, block]));
}
