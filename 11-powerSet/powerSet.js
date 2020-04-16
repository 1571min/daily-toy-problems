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

  let unique = new Set();
  for (let i = 0; i < str.length; i++) {
    unique.add(str[i]);
  }
  let uniqStr = Array.from(unique);
  let indexArr = [];
  let result = [];
  let checkIndex = Array(uniqStr.length).fill(0);

  let recursion = (idx) => {
    result.push(indexArr.join(''));
    for (let i = idx; i < uniqStr.length; i++) {
      //재귀 호출
      if (checkIndex[i] === 1) continue;
      checkIndex[i] = 1;
      indexArr.push(uniqStr[i]);
      recursion(i + 1);
      indexArr.pop();
      checkIndex[i] = 0;
    }
  };
  recursion(0);

  // let result = [];
  // let unique = new Set();
  // // unique.add('')
  // for (let i = 0; i < str.length; i++) {
  //   unique.add(str[i]);
  // }
  // //set->array 변경
  // let uniqStr = Array.from(unique);
  // function recursion(string, start) {
  //   result.push(string);
  //   for (let i = start; i < uniqStr.length; i++) {
  //     const uniqStrElement = uniqStr[i];
  //     //안녕 힘쎄고 좋은아침 난 건너뛴다 인덱스를
  //     recursion(string + uniqStrElement, i + 1);
  //   }
  // }
  // recursion('', 0);
  return result.sort();
};
