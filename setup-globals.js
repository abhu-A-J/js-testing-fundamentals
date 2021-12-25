async function test(title, cb) {
  try {
    await cb(); // to handle async functions as well
    console.log(`✅ ${title}`);
  } catch (err) {
    console.error(`❌ ${title}`);
    console.error(err);
  }
}

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

globalThis.expect = expect;
globalThis.test = test;
