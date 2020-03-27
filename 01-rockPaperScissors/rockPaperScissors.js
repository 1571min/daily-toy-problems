/*
* 세 판의 가위바위보를 할 동안 낼 수 있는 모든 경우의 수를 return하는 함수를 작성하세요. 
*
* 결과는 다음과 같을 것입니다. 
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
*         ...etc ...
*    ]

* Advanced: 
* 변수로 전달하는 판수에 맞는 정답을 return 하도록 작성한 함수를 바꿔 보세요.
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*/

const rockPaperScissors = function() {
  // TODO: Your code here!
  let result = [];
  let rock = 'rock',
    scissors = 'scissors',
    paper = 'paper';

  let select = [];

  let DFS = function(cnt) {
    if (cnt === 3) {
      let temp = [];
      for (let i = 0; i < 3; i++) {
        temp.push(select[i]);
      }
      result.push(temp);
      return;
    }
    for (let i = 0; i < 3; i++) {
      select[cnt] = allcase[i];
      DFS(cnt + 1);
    }
  };
  let allcase = [rock, paper, scissors];
  DFS(0, 0);
  return result;
};
