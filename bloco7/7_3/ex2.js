const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function', 'Sim, myRemove é uma função.');
assert.deepStrictEqual(
  myRemove([1, 2, 3, 4], 3),
  [1, 2, 4],
  'Eles são extremamente iguais :P'
);
assert.notDeepStrictEqual(
  myRemove([1, 2, 3, 4], 3),
  [1, 2, 3, 4],
  'Os arrays não são iguais.'
);

let arr = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(arr, 6), arr, 'Array não sofreu alterações');

assert.deepStrictEqual(
  myRemove([1, 2, 3, 4], 6),
  [1, 2, 3, 4],
  'Resultado continua o mesmo'
);
