const myRemove = require('./myRemove');

test('sums two values', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('sums two values', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('sums two values', () => {
  expect(myRemove([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
});
