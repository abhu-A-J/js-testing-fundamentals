const { sum, subtract, correctSum } = require('../math');

/* Assertion abstraction */
function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (result <= expected) {
        throw new Error(`${result} is not greater than ${expected}`);
      }
    },
    toBeGreaterAndEqualThan(expected) {
      if (result < expected) {
        throw new Error(`${result} is not greater than ${expected}`);
      }
    },
  };
}

let result, expected;

/* toBe() assertion test */
result = sum(3, 7);
expected = 10;
expect(result).toBe(expected); // fails

/* toBe() assertion test */
result = correctSum(3, 7);
expected = 10;
expect(result).toBe(expected); // passes

/* toBe() assertion test */
result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected); // passes

/* toBeGreaterThan() assertion test */
result = sum(4, 7);
expect(result).toBeGreaterThan(11); // fails

/* toBeGreaterThan() assertion test */
result = sum(4, 7);
expect(result).toBeGreaterAndEqualThan(11); //passes

module.exports = {
  expect,
};
