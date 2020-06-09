/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

function ispalindrome(string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

var longestPalindrome = function (string) {
  let stringArr = string.split(' ');
  let palindromeArr = [];
  let max = '';
  stringArr.forEach(element => {
    if (ispalindrome(element)) {
      palindromeArr.push(element);
    }
  });

  for (let i = 0; i < palindromeArr.length; i++) {
    let temp = string.split(palindromeArr[i]);
    if (temp[0] && temp[1]) {
      for (let j = 0; j < Math.min(temp[0].length, temp[1].length); j++) {
        if (temp[0][temp[0].length - 1 - j] === temp[1][j]) {
          palindromeArr[i] = temp[1][j] + palindromeArr[i] + temp[1][j];
        } else {
          break;
        }
      }
    }
  }
  palindromeArr.forEach(element => {
    if (element.length > max.length) {
      max = element;
    }
  });

  return max;
};