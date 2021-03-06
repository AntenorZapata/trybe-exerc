const assert = require('assert');

const sumAllNumbers = (arr) => {
  let count = 0;

  for (let num of arr) {
    count += num;
  }
  return count;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
