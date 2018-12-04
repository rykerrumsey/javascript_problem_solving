// this solution has a time complexity of O(n2)
function maxSubArraySumOld(arr, amount) {
  let maxSum = 0;
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length - amount + 1; i++) {
    let innerSum = 0;
    for (let j = 0; j < amount; j++) {
      innerSum += arr[i + j];
      if (innerSum > maxSum) {
        maxSum = innerSum;
      }
    }
  }

  return maxSum;
}

// this solution has a time complexity of O(n)
function maxSubArraySum(arr, amount) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < amount) return null;

  for (let i = 0; i < amount; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = amount; i < arr.length; i++) {
    tempSum = tempSum - arr[i - amount] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

module.exports = {
  maxSubArraySum,
};
