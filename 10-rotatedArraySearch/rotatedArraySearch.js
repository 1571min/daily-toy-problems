/*
 * 정렬되어 있는 배열 중 일부를 왼쪽 혹은 오른쪽으로 회전시킨 배열이 주어졌을때,
 * 어떻게 특정 element를 효율적으로 찾을 수 있을까요?
 *
 * 작성한 함수는 target의 index값을 return하고, 없으면 null을 return해야 합니다.
 *
 * 예시 :
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * 시간 복잡도가 O(log(array.length))이 되도록 도전해 보세요!
 */

const rotatedArraySearch = function (rotated, target) {
  // TODO : Your code here!
  let midle;
  let low = 0;
  let high = rotated.length - 1;
  while (low <= high) {
    midle = Math.floor((low + high) / 2);
    if (target === rotated[midle]) return midle;
    if (
      (target > rotated[midle + 1] && target > rotated[midle - 1]) ||
      (target < rotated[midle + 1] && target < rotated[midle - 1])
    ) {
      if (target > rotated[midle - 2]) {
        low = midle + 2;
      } else {
        high = midle - 2;
      }
    } else {
      if (target > rotated[midle - 1]) {
        low = midle + 1;
      } else {
        high = midle - 1;
      }
    }
  }
  return null;
};
