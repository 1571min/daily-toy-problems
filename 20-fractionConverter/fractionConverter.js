/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

function getGcd(a, b) {
  let answer;
  let minNum = Math.min(a, b);
  let maxNum = Math.max(a, b);
  answer = gcd(minNum, maxNum);
  return answer;
}
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
function deleteDot(num) {
  let str = num.toString();
  let deletedStr = str.split('.').join('');
  return Number(deletedStr);
}

var toFraction = function (number) {
  // Your code here
  let numStr = number.toString();
  let denominator =
    number < 0
      ? Math.pow(10, numStr.length - 3)
      : Math.pow(10, numStr.length - 2);
  let numerator = deleteDot(number);
  if (number === 1) {
    denominator = 1;
  }

  let gcd = getGcd(denominator, numerator);
  return '' + numerator / gcd + '/' + denominator / gcd;
};
