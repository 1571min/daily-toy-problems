/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function (n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function (n, board, i, j) {
  //nqueens
  board = makeBoard(n);
  console.log(board);
  console.log(board[0][0]);
  console.log(board[0][0]);
  console.log(board[0][0]);
  console.log(board[1][1]);
  i = j = 0;
  let count = 0;
  console.log(i, j);
  //탈출 조건 i,j가 n이 됐을 때
  let recursion = function (i, j) {
    if ((i === n) & (j === n)) {
      count += 1;
      return;
    }
    if (i + 1 < n && j < n && !board.hasBeenVisited(i + 1, j)) {
      board.togglePiece(i + 1, j);
      recursion(i + 1, j);
    }
    if (i < n && j + 1 < n && !board.hasBeenVisited(i, j + 1)) {
      board.togglePiece(i, j + 1);
      recursion(i, j + 1);
    }
    if (i - 1 < n && j < n && !board.hasBeenVisited(i - 1, j)) {
      board.togglePiece(i - 1, j);
      recursion(i - 1, j);
    }
    if (i < n && j - 1 < n && !board.hasBeenVisited(i, j - 1)) {
      board.togglePiece(i, j - 1);
      recursion(i, j - 1);
    }
  };
  recursion(0, 0);
  return count;
};

robotPaths(2);
