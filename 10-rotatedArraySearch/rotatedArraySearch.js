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
  // 복습 :
  // 이진 탐색과 비슷 그러나 대소를 비교할 때 범위를 이용해서 비교
  // 초기값 마지막 값
  // 두개가 같아 지거나 커질 때 까지
  // 만약에 중간 값이 처음 값 보다 크면( 정상 배열 )
  //  앞부분 범위 체크
  //      범위에 들면 마지막 middle-1
  //      범위에 안들면 초기값 middle +1
  //작으면 ( 회전 배열 )
  // 뒤 부분 범위 체크
  //      범위에 들면 마지막 middle+1
  //      범위에 안들면 초기값 middle -1
  let result = null;
  let first = 0;
  let last = rotated.length - 1;
  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (rotated[middle] === target) {
      result = middle;
      break;
    }
    if (rotated[first] < rotated[middle]) {
      if (rotated[first] <= target && target < rotated[middle]) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    } else {
      if (rotated[middle] <= target && target < rotated[last]) {
        first = middle + 1;
      } else {
        last = middle - 1;
      }
    }
  }
  return result;
};
