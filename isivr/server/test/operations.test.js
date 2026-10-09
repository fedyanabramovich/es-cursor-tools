const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { searchOperations } = require('../client');

describe('operation catalog', () => {
  it('finds holiday calendar save outside swagger', () => {
    const found = searchOperations('Calendar_SaveCalendar');
    assert.equal(found.length, 1);
    assert.equal(found[0].path, 'Calendar/SaveCalendar');
    assert.equal(found[0].method, 'POST');
  });

  it('finds sound lookup outside swagger', () => {
    const found = searchOperations('Audio_GetGroupsSelectData');
    assert.equal(found[0].path, 'Audio/GetGroupsSelectData');
  });
});
