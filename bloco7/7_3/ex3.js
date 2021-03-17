const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy(arr, 4), [1, 2, 3]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 2), [1, 3, 4]);
assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const newCall = myRemoveWithoutCopy;
const list = [5, 6, 7, 8];
assert.deepStrictEqual(newCall(list, 6), [5, 7, 8]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
