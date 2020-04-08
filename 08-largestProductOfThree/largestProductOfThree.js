/*
 * 배열이 주어졌을 때, 이 중 3개의 숫자를 곱하여 나올 수 있는 최대값을 return하는 함수를 작성하세요.
 *
 * 예시:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Advanced : 음수가 포함되었을때, 작동할 수 있도록 작성하세요.
 */

const largestProductOfThree = function (array) {
  //조합
  //체크할 배열[0,0,0,0,0]
  //if(count===3){ return }
  //재귀 호출 ( array )
  //count++, 체크
  //음수 ->
  let result = 0;
  let checkIndex = Array(array.length).fill(0);
  let negativeCheckValue = negativeCheck(array);
  if (negativeCheckValue) {
    array = array.map((ele) => -ele);
  }
  let negativeResult = Math.max(...array) * 3;

  let DFS = function (multifulValue, count) {
    if (count === 3) {
      if (negativeCheckValue) {
        if (multifulValue < negativeResult) {
          negativeResult = multifulValue;
        }
      } else {
        if (multifulValue > result) {
          result = multifulValue;
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (checkIndex[i] !== 1) {
        checkIndex[i] = 1;
        DFS(multifulValue * array[i], ++count);
        count--;
        checkIndex[i] = 0;
      }
    }
  };
  DFS(1, 0);
  if (negativeCheckValue) {
    return -negativeResult;
  }
  return result;
};

function negativeCheck(array) {
  let result = true;
  array.forEach((ele) => {
    if (ele > 0) {
      result = false;
    }
  });
  return result;
}
