/*
 * 주어진 문자열의 'power set'으로 이루어진 배열을 return하는 함수를 작성하세요.
 *
 * power set이란?
 * 비어있는 집합을 포함한 모든 부분집합(subset)의 모음.
 *
 * 예시 :
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * 참고 :
 *  1. 모든 부분집합의 문자들은 알파벳 순서로 정렬되어야 합니다.
 *  2. 같은 문자로 이루어진 부분집합은 순서와 무관하게 하나로 인식합니다. ('ab'와 'ba'는 같습니다.)
 *
 * 예시 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

const powerSet = function (str) {
  // TODO: Your code here!
  //조합
  let strArr = ['', ...str.split('')];
  let indexArr = [];
  let result = [];
  let checkIndex = Array(strArr.length).fill(0);
  let recursion = () => {
    //탈출조건
    //index ===length
    if (indexArr.length === strArr.length - 1) {
      //  결과배열에 배열 문자열 모두 합해서 push
      let strTemp = indexArr.join('');
      if (!result.includes(strTemp)) {
        result.push(strTemp);
      }
      return;
    }
    for (let i = 0; i < strArr.length; i++) {
      //재귀 호출
      if (checkIndex[i] === 1 && i !== 0) continue;
      checkIndex[i] = 1;
      indexArr.push(strArr[i]);
      recursion();
      indexArr.pop();
      checkIndex[i] = 0;
    }
  };
  recursion();

  return result.sort();
};
