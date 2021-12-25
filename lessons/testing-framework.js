const { sum, subtract, correctSum } = require('../math');
const { expect } = require('./assertion-library');

function test(title, cb) {
  try {
    cb();
    console.log(`✅ ${title}`);
  } catch (err) {
    console.error(`❌ ${title}`);
    console.error(err);
  }
}

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('sum adds numbers', () => {
  const result = correctSum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
