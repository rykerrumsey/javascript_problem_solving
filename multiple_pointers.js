function multiPoint(arr) {
  let firstPtr = 0;
  let secondPtr = 1;

  if (arr.length === 0) return 0;

  while (secondPtr < arr.length) {
    if (arr[firstPtr] === arr[secondPtr]) {
      secondPtr += 1;
    } else {
      firstPtr += 1;
      arr[firstPtr] = arr[secondPtr];
      secondPtr += 1;
    }
  }

  return firstPtr + 1;
}

module.exports = {
  multiPoint,
};
