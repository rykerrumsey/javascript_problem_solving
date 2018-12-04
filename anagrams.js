function generateObject(str) {
  const obj = {};
  for (let i = 0; i < str.length; i += 1) {
    const value = str.charAt(i);
    const res = Object.keys(obj).includes(value) ? obj[value] += 1 : obj[value] = 1;
  }
  return obj;
}

function validateAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = generateObject(str1.toLowerCase());
  str2.toLowerCase();

  for (let i = 0; i < str2.length; i += 1) {
    // if first letter in string is in the lookup
    // and the lookup is > 0 ... minus 1
    if (Object.keys(lookup).includes(str2[i]) && lookup[str2[i]] > 0) {
      lookup[str2[i]] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {
  validateAnagram,
  generateObject,
};
