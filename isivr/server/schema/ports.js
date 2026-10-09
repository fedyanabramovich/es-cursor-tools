const { BUTTONS, blockSpec } = require('./catalog');

function outputKey(value) {
  return value == null || value === '' ? '' : String(value);
}

function usedOutputs(block, edges) {
  return new Set(
    (edges || [])
      .filter((edge) => edge.from === block.key)
      .map((edge) => outputKey(edge.output)),
  );
}

function dtmfPorts(block, edges) {
  const used = usedOutputs(block, edges);
  const data = Array.isArray(block.params.OutputsData) ? block.params.OutputsData : [];
  data.forEach((item) => {
    if (used.has(outputKey(item.ID))) item.Value = true;
  });
  const enabled = BUTTONS.filter((id) => data.some((item) => outputKey(item.ID) === id && item.Value));
  const ports = enabled.map((value) => ({ value, kind: 'stack', label: value }));
  ports.push({ value: 'NoInput', kind: 'stack', label: 'Таймаут' });
  ports.push({ value: 'NoMatch', kind: 'stack', label: 'Ошибка' });
  return ports;
}

function conditionPorts(block) {
  const ports = [
    { value: 'false', kind: 'left', label: 'else' },
    {
      value: 'true',
      kind: 'right',
      label: block.params.Condition?.Name || block.params.Condition?.ConditionText || 'true',
    },
  ];
  (block.params.AdditionalConditions || []).forEach((item, index) => {
    ports.push({
      value: String(item.ID),
      kind: 'condition-stack',
      stackIndex: index + 1,
      label: item.Value?.Name || item.Value?.ConditionText || String(item.ID),
    });
  });
  return ports;
}

function resolvePorts(block, edges) {
  const spec = blockSpec(block.type);
  if (spec.ports === 'dtmf') return dtmfPorts(block, edges);
  if (spec.ports === 'condition') return conditionPorts(block);
  return spec.outputs.map((port) => ({ ...port }));
}

function stackDepth(ports) {
  return ports.filter((port) => port.kind === 'stack' || port.kind === 'condition-stack').length;
}

module.exports = { outputKey, resolvePorts, stackDepth };
