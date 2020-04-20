/*
 * 정렬된 배열이 주어졌을때, 이진 탐색 알고리즘을 이용하여 특정 요소의 인덱스값을 return하는 함수를 작성하세요.
 *
 * 예시 :
 *
 * let index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 *
 * 참고 : https://qph.fs.quoracdn.net/main-qimg-742d049387316193be2d097fe7a499de
 */

const binarySearch = function (array, target) {
  // TODO: Your code here!
  //이진 탐색 트리
  // 초기 값
  // 마지막 값
  // 마지막 값이 초기값보다 커질 때 까지
  // 중간 값보다 크면 초기값 변경
  //중간 값보다 작으면 마지막 값 변경
  // 같으면 리턴
  let first = 0;
  let last = array.length - 1;
  while (last >= first) {
    let middle = Math.floor((first + last) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return null;
};
