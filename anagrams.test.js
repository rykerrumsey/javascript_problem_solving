// --Understand the problem--

// Can I restate the problem in my own words?
// Check to see if two strings entered into a function are equal
// if one of the strings are reversed.

// What are the inputs of the function?
// Need exactly 2 strings

// What are the outputs of the function?
// A boolean true or false

// Do we have enough information to solve the problem?
// Does case matter? NO
// What happens when only 1 argument is entered? Return FALSE

// --Concrete Examples--
/* validateAnagram("", "") => TRUE
 * validateAnagram("2", "2") => TRUE
 * validateAnagram("asdffdsa", "fds1asdf") => FALSE
 * validateAnagram("wweNsd", "nsdwwe") => TRUE
 */

const { validateAnagram, generateObject } = require('./anagrams');

test('Invalid anagram should return false', () => {
  const str1 = 'word';
  const str2 = 'dora';
  expect(validateAnagram(str1, str2)).toBe(false);
});

test('Valid anagram should return true', () => {
  const str1 = 'asdf';
  const str2 = 'fdsa';
  expect(validateAnagram(str1, str2)).toBe(true);
});

test('Anagram with different case should return true', () => {
  const str1 = 'D43a';
  const str2 = 'da43';
  expect(validateAnagram(str1, str2)).toBe(true);
});

test('Should return a broken down string', () => {
  const fabricatedObject = {
    a: 3,
    c: 1,
    4: 2,
    v: 1,
  };

  const str = 'ac4a4va';
  expect(JSON.stringify(generateObject(str))).toBe(JSON.stringify(fabricatedObject));
});
