/*
 * 두 개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를 순서대로 return하는 함수를 작성하세요. (공백, 중복 제외)
 * 예시 : commonCharacters('acexivou', 'aegihobu')
 * 결과 : 'aeiou'
 *
 * Advanced : 두 개 이상의 문자열을 받을 수 있도록 기능을 확장하세요.
 */

const commonCharacters = function (...args) {
  let result = [];
  args[0].split('').forEach((element) => {
    let check = true;
    // for (let i = 1; i < arguments.length; i++) {
    //   if (!arguments[i].includes(element)) {
    //     return;
    //   }
    // }
    args.forEach((innerelement) => {
      if (!innerelement.includes(element)) {
        check = false;
      }
    });
    if (check) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
  });
  return result.join('');
};
