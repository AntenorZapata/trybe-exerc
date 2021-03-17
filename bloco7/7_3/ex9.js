const assert = require('assert');

const findTheNeedle = (arr, word) => {
  let count = -1;

  for (let item of arr) {
    if (item === word) {
      count = arr.indexOf(item);
    }
  }

  return count;
};

// escreva a função

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
