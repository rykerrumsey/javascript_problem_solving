const { multiPoint } = require('./multiple_pointers');

test('should find the amount of unique values in a sorted array', () => {
  const arr = [-1, -1, 0, 2, 4, 5, 6, 6, 8, 8, 10];
  const arr2 = [];
  const result = multiPoint(arr);
  expect(result).toBe(8);
  expect(multiPoint(arr2)).toBe(0);
});
