const sum = require('./sum');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums two values', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('sums two values', () => {
  expect(() => sum(4, '5')).toThrow();
});

test('sums two values', () => {
  expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
});
