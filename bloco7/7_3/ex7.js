const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (arr) => {
  let count = 0;

  for (let word of arr) {
    for (let letter of word) {
      count += 1;
    }
    result.push(count);
    count = 0;
  }
  return result;

  // or

  //   let result = [];

  //   for (let word of arr) {
  //     result.push(word.length);
  //   }
  //   return result;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
