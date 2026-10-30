const test = require('node:test');
const assert = require('node:assert/strict');
const { total } = require('./app');

test('aplica un descuento del 50 por ciento', () => {
  assert.strictEqual(total(100, 2, 0.5), 100);
});
