const { resolvePorts, stackDepth, outputKey } = require('./ports');

const GAP_X = 80;
const GAP_Y = 150;
const ORIGIN = 40;
const PORT_STEP = 48;

function placeBlocks(blocks, edges, layout) {
  const linked = bindEdges(blocks, edges);
  if (layout === 'keep' && blocks.every((block) => block.x != null && block.y != null)) return;
  const fresh = blocks.filter((block) => block.x == null || block.y == null);
  if (layout === 'incremental' && fresh.length && fresh.length < blocks.length) {
    placeFresh(fresh, blocks, linked);
    pushForTallerPorts(blocks);
    return;
  }
  layoutFull(blocks, linked);
  placeMarkers(blocks, linked);
  placeOrphans(blocks);
  shiftIntoView(blocks);
}

function bindEdges(blocks, edges) {
  const byKey = new Map(blocks.map((block) => [block.key, block]));
  return edges.map((edge) => ({
    ...edge,
    source: byKey.get(edge.from),
    target: byKey.get(edge.to),
  }));
}

function layoutFull(blocks, edges) {
  const rank = ranks(blocks, edges);
  const byRank = groupByRank(blocks, rank);
  const columnWidth = Math.max(...blocks.map((block) => block.width)) + GAP_X;
  let y = ORIGIN;
  for (const row of byRank) {
    placeRow(row, edges, columnWidth);
    const height = Math.max(...row.map((block) => block.height + portTail(block, edges)));
    row.forEach((block) => { block.y = y; });
    y += height + GAP_Y;
  }
}

function placeRow(row, edges, columnWidth) {
  row.forEach((block) => { block.x = desiredX(block, edges, columnWidth); });
  packStackGroups(row, edges);
  pack(row);
}

function desiredX(block, edges, columnWidth) {
  const parent = parentOf(block, edges);
  if (!parent || isStack(parent, edges)) return parent ? parent.x + parent.width + GAP_X : ORIGIN;
  if (soleTarget(parent, edges)) return centeredX(parent, block);
  return spreadX(parent, block, edges, columnWidth);
}

function packStackGroups(row, edges) {
  const groups = new Map();
  row.forEach((block) => {
    const parent = parentOf(block, edges);
    if (!parent || !isStack(parent, edges)) return;
    const children = groups.get(parent.key) || [];
    children.push(block);
    groups.set(parent.key, children);
  });
  groups.forEach((children) => placeStackChildren(parentOf(children[0], edges), children, edges));
}

function placeStackChildren(parent, children, edges) {
  const ordered = [...children].sort(byPort(edges));
  let x = parent.x + parent.width + GAP_X;
  ordered.forEach((block) => {
    block.x = x;
    x += block.width + GAP_X;
  });
}

function pack(row) {
  row.sort((left, right) => left.x - right.x || left.key.localeCompare(right.key));
  let cursor = -Infinity;
  row.forEach((block) => {
    block.x = Math.max(block.x, cursor);
    cursor = block.x + block.width + GAP_X;
  });
}

function centeredX(parent, block) {
  return Math.round(parent.x + parent.width / 2 - block.width / 2);
}

function spreadX(parent, block, edges, columnWidth) {
  const ports = resolvePorts(parent, edges);
  const spread = Math.max(ports.length - 1, 0) * columnWidth;
  const center = parent.x + parent.width / 2 - spread / 2 + portIndex(block, edges) * columnWidth;
  return Math.round(center - block.width / 2);
}

function placeFresh(fresh, blocks, edges) {
  fresh.forEach((block) => {
    const parent = incoming(block, edges).map((edge) => edge.source).find((item) => item?.x != null);
    block.x = parent ? freshX(parent, block, edges) : ORIGIN;
    block.y = (parent?.y ?? ORIGIN) + (parent?.height ?? 0) + (parent ? portTail(parent, edges) : 0) + GAP_Y;
    shove(block, blocks.filter((item) => item !== block && item.x != null));
  });
}

function shove(block, obstacles) {
  let guard = 0;
  while (obstacles.some((item) => overlaps(block, item)) && guard < 40) {
    block.x += block.width + GAP_X;
    guard += 1;
  }
}

function pushForTallerPorts(blocks) {
  blocks.filter((block) => block.previousStack != null).forEach((block) => {
    const delta = (block.stack || 0) - block.previousStack;
    if (delta <= 0) return;
    const shift = delta * PORT_STEP;
    blocks.forEach((other) => {
      if (other !== block && other.y > block.y && Math.abs(other.x - block.x) < block.width) other.y += shift;
    });
  });
}

function placeMarkers(blocks, edges) {
  blocks.filter((block) => block.type === 'Marker' && !reachable(block, edges)).forEach((marker) => {
    const next = outgoing(marker, edges).map((edge) => edge.target).find((target) => target?.x != null);
    if (next) {
      marker.x = centeredX(next, marker);
      marker.y = next.y - marker.height - Math.round((GAP_Y - marker.height) / 2);
      return;
    }
    const goto = blocks.find((block) => block.type === 'GoTo' && sameMarker(block, marker) && block.x != null);
    if (!goto) return;
    marker.x = goto.x + goto.width + GAP_X;
    marker.y = goto.y;
  });
}

function sameMarker(goto, marker) {
  if (goto.params.markerKey) return goto.params.markerKey === marker.key;
  return String(goto.params.MarkerBlockCellID) === String(marker.cellId);
}

function ranks(blocks, edges) {
  const start = blocks.find((block) => block.type === 'Start') || blocks[0];
  const rank = new Map();
  const seenAt = new Map();
  walkRanks(start, 0, edges, rank, seenAt);
  rankMarkerTargets(blocks, edges, rank, seenAt);
  stretchForward(edges, rank, blocks.length);
  return rank;
}

function rankMarkerTargets(blocks, edges, rank, seenAt) {
  const markers = blocks.filter((block) => block.type === 'Marker' && !reachable(block, edges));
  let changed = true;
  while (changed) {
    changed = markers.some((marker) => rankFromJumps(marker, blocks, edges, rank, seenAt));
  }
}

function rankFromJumps(marker, blocks, edges, rank, seenAt) {
  const target = outgoing(marker, edges)[0]?.target;
  if (!target || rank.has(target.key)) return false;
  const jumps = blocks.filter((block) => block.type === 'GoTo' && sameMarker(block, marker) && rank.has(block.key));
  if (!jumps.length) return false;
  walkRanks(target, Math.max(...jumps.map((block) => rank.get(block.key))) + 1, edges, rank, seenAt);
  return true;
}

function walkRanks(start, startRank, edges, rank, seenAt) {
  if (!start) return;
  const queue = [start];
  rank.set(start.key, startRank);
  seenAt.set(start.key, seenAt.size);
  let clock = seenAt.size;
  while (queue.length) {
    const block = queue.shift();
    clock = discoverRank(block, edges, rank, seenAt, queue, clock);
  }
}

function discoverRank(block, edges, rank, seenAt, queue, clock) {
  outgoing(block, edges).forEach((edge) => {
    const target = edge.target;
    if (!target || rank.has(target.key)) return;
    rank.set(target.key, rank.get(block.key) + 1);
    seenAt.set(target.key, clock);
    clock += 1;
    queue.push(target);
  });
  return clock;
}

function stretchForward(edges, rank, limit) {
  for (let pass = 0; pass < limit; pass += 1) {
    if (!edges.some((edge) => deepen(edge, rank, edges))) return;
  }
}

function deepen(edge, rank, edges) {
  const from = rank.get(edge.source?.key);
  const to = rank.get(edge.target?.key);
  if (from == null || to == null || to >= from + 1) return false;
  if (reaches(edge.target, edge.source, edges)) return false;
  rank.set(edge.target.key, from + 1);
  return true;
}

function reaches(from, to, edges) {
  const seen = new Set();
  const queue = [from];
  while (queue.length) {
    const block = queue.pop();
    if (!block || seen.has(block.key)) continue;
    if (block === to) return true;
    seen.add(block.key);
    outgoing(block, edges).forEach((edge) => queue.push(edge.target));
  }
  return false;
}

function groupByRank(blocks, rank) {
  const rows = [];
  blocks.forEach((block) => {
    const value = rank.get(block.key);
    if (value == null) return;
    rows[value] = rows[value] || [];
    rows[value].push(block);
  });
  return rows.filter(Boolean);
}

function freshX(parent, block, edges) {
  if (isStack(parent, edges)) return parent.x + parent.width + GAP_X;
  if (soleTarget(parent, edges)) return centeredX(parent, block);
  return parent.x + portIndex(block, edges) * (block.width + GAP_X);
}

function parentOf(block, edges) {
  return incoming(block, edges)[0]?.source || null;
}

function soleTarget(parent, edges) {
  return new Set(outgoing(parent, edges).map((edge) => edge.to)).size === 1;
}

function isStack(parent, edges) {
  const ports = resolvePorts(parent, edges);
  return ports.length > 0 && ports.every((port) => port.kind === 'stack');
}

function byPort(edges) {
  return (left, right) => portIndex(left, edges) - portIndex(right, edges) || left.key.localeCompare(right.key);
}

function portIndex(block, edges) {
  return edgeOrder(incoming(block, edges)[0], edges);
}

function shiftIntoView(blocks) {
  const placed = blocks.filter((block) => block.x != null);
  if (!placed.length) return;
  const min = Math.min(...placed.map((block) => block.x));
  if (min >= ORIGIN) return;
  const delta = ORIGIN - min;
  placed.forEach((block) => { block.x += delta; });
}

function edgeOrder(edge, edges) {
  if (!edge?.source) return 0;
  const ports = resolvePorts(edge.source, edges);
  const index = ports.findIndex((port) => outputKey(port.value) === outputKey(edge.output));
  return visualIndex(ports, index);
}

function visualIndex(ports, index) {
  if (index < 0 || !ports.length) return 0;
  if (!ports.every((port) => port.kind === 'stack')) return index;
  return ports.length - 1 - index;
}

function portTail(block, edges) {
  return stackDepth(resolvePorts(block, edges)) * PORT_STEP;
}

function incoming(block, edges) {
  return edges.filter((edge) => edge.to === block.key);
}

function outgoing(block, edges) {
  return edges.filter((edge) => edge.from === block.key);
}

function reachable(block, edges) {
  return edges.some((edge) => edge.to === block.key) || block.type === 'Start';
}

function placeOrphans(blocks) {
  let x = ORIGIN;
  blocks.filter((block) => block.x == null).forEach((block) => {
    block.x = x;
    block.y = ORIGIN;
    x += block.width + GAP_X;
  });
}

function overlaps(left, right) {
  return left.x < right.x + right.width && left.x + left.width > right.x
    && left.y < right.y + right.height && left.y + left.height > right.y;
}

module.exports = { placeBlocks, overlaps };
