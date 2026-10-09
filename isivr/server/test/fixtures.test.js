const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseModule } = require('../schema/parse');
const { compile } = require('../schema/compile');

const inputField = fixture('module-1155.json');
const condition = fixture('module-722.json');

test('published input-field module keeps size and position', { skip: !inputField }, () => {
  const graph = load(inputField);
  const compiled = compile({ ...graph, layout: 'keep' }, graph);
  const original = graph.blocks.find((block) => block.type === 'InputField');
  const saved = compiled.graph.blocks.find((block) => block.cellId === original.cellId);
  assert.equal(saved.x, original.x);
  assert.equal(saved.y, original.y);
  assert.equal(saved.width, 620);
  assert.match(compiled.template, new RegExp(`id="${saved.cellId}"[^>]*componentType="InputField"`));
  assert.match(compiled.template, /width="620"/);
  assert.equal(compiled.graph.edges.length, graph.edges.length);
});

test('published condition module keeps branch coordinates', { skip: !condition }, () => {
  const graph = load(condition);
  const compiled = compile({ ...graph, layout: 'keep' }, graph);
  graph.blocks.forEach((block) => {
    const saved = compiled.graph.blocks.find((item) => item.cellId === block.cellId);
    assert.equal(saved.x, block.x);
    assert.equal(saved.y, block.y);
  });
  const check = compiled.blocks.find((block) => block.Type === 'Condition');
  assert.ok(check.Outputs.some((output) => output.OutputID === 'false' && output.NextBlockID));
});

function fixture(name) {
  const file = path.join(__dirname, '../fixtures', name);
  return fs.existsSync(file) ? file : null;
}

function load(file) {
  const saved = JSON.parse(fs.readFileSync(file, 'utf8'));
  return parseModule(saved.response.Module, saved.response.Template);
}
