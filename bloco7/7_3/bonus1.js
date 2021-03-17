function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  let remaining = paid - payable; // 114
  let result = 0; //50 + 20 +  10

  if (paid < payable) throw new Error('paid value is not enough');

  for (let i = 0; i < coins.length; i += 1) {
    if (coins[i] + result <= remaining) {
      if (result + coins[i] * 2 <= remaining) {
        result += coins[i] * 2;
        change.push(coins[i], coins[i]);
      } else {
        result += coins[i];
        change.push(coins[i]);
      }
    }
  }
  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => {
  getChange(100, 10);
}, /^Error: paid value is not enough$/);
