const assert = require('assert');

const removeVowels = (word) => {
  let result = '';
  let count = 1;

  for (let letter of word) {
    if (letter === 'a') {
      letter = count;
      result += letter;
      count += 1;
    } else if (letter === 'e') {
      letter = count;
      result += letter;
      count += 1;
    } else if (letter === 'i') {
      letter = count;
      count += 1;
    } else if (letter === 'o') {
      letter = count;
      result += letter;
      count += 1;
    } else if (letter === 'u') {
      letter = count;
      result += letter;
      count += 1;
    } else {
      result += letter;
    }
  }

  return result;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
