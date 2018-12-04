const { maxSubArraySum } = require('./sliding_window');

test('should return the correct max of the sub array sum', () => {
  let arr = [1, 2, 5, 2, 8, 1, 5];
  let arrAmount = 2;
  let sum = maxSubArraySum(arr, arrAmount);
  expect(sum).toBe(10);

  arr = [1, 2, 5, 2, 8, 1, 5];
  arrAmount = 4;
  sum = maxSubArraySum(arr, arrAmount);
  expect(sum).toBe(17);

  arr = [4, 2, 1, 6];
  arrAmount = 1;
  sum = maxSubArraySum(arr, arrAmount);
  expect(sum).toBe(6);

  arr = [4, 2, 1, 6, 2];
  arrAmount = 4;
  sum = maxSubArraySum(arr, arrAmount);
  expect(sum).toBe(13);

  arr = [];
  arrAmount = 4;
  sum = maxSubArraySum(arr, arrAmount);
  expect(sum).toBe(null);
});
