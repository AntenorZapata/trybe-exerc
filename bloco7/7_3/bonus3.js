const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = (words) => {
  result = '';

  for (let word of words) {
    if (words.indexOf(word) === (words.length - 1) / 2) {
      result += words.splice(2, 1);
    }
  }

  return [result];
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);
assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
