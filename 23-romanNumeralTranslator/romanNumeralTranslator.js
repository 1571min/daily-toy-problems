/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

// import { reduce } from '../../../im19_week3/im-sprint-n-queens/lib/underscore';

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var translateRomanNumeral = function (romanNumeral) {
  // TODO: Implement me!
  //문자열이 빌때 까지 더하기
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  let romanNumeralArr = romanNumeral.split('');
  let result = 0;
  for (var i = 0; i < romanNumeralArr.length - 1; i++) {
    if (
      DIGIT_VALUES[romanNumeralArr[i]] >= DIGIT_VALUES[romanNumeralArr[i + 1]]
    ) {
      result += DIGIT_VALUES[romanNumeralArr[i]];
    } else {
      result -= DIGIT_VALUES[romanNumeralArr[i]];
    }
  }
  if (DIGIT_VALUES[romanNumeralArr[i]]) {
    result += DIGIT_VALUES[romanNumeralArr[i]];
  }
  return result;
};
