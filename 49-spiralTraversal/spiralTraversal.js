/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function (matrix) {
  // TODO: Implement me!
  let temp = 0;
  if (matrix[0].length >= 2) {
    temp = 3 + 2 * (matrix[0].length - 2);
    if (matrix.length > matrix[0].length) temp += 1;
  } else {
    temp = 1;
  }
  let result = [];
  let row = matrix[0].length;
  let column = matrix.length;
  let
  for (let i = 0; i < temp; i++) {
    if (i % 2 === 0) {
      // 가로로 갈 때
      for (let j = 0; j < row - i / 2; j++) {
        temp['고정'][]
      }
    } else {
      // 세로로 갈 때
      for (let j = 0; j < column + 1 - i; j++) {
        temp[]['고정']
      }
    }
  }
};