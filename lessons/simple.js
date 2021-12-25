/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const { sum, subtract } = require('../math');

let result, expected;

/* Write test function for the sum module */
result = sum(1, 2);
expected = 3;

if (result !== expected) {
  throw new Error(`${result} does not equal ${expected}`);
}

/* Write test function for substraction module */
result = subtract(2, 1);
expected = 1;

if (result !== expected) {
  throw new Error(`${result} does not equal ${expected}`);
}
