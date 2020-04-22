/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function checkParens(open, close) {
  if (open === '(' && close === ')') {
    return true;
  } else if (open === '{' && close === '}') {
    return true;
  } else if (open === '[' && close === ']') {
    return true;
  }
  return false;
}
function isParens(ele) {
  return (
    ele === '(' ||
    ele === '[' ||
    ele === '{' ||
    ele === ')' ||
    ele === '}' ||
    ele === ']'
  );
}

var balancedParens = function (input) {
  let inputArr = input.split('');
  inputArr = inputArr.filter((ele) => {
    return isParens(ele);
  });
  let bucket = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === '(' || inputArr[i] === '{' || inputArr[i] === '[') {
      //여는 괄호 일 때
      bucket.push(inputArr[i]);
    } else {
      // 닫는 괄호 일 때
      let check = false;
      let temp = [];
      while (bucket.length !== 0) {
        let paren = bucket.pop();
        if (checkParens(paren, inputArr[i])) {
          //짝이 맞으면 남은 temp모두 bucket으로
          while (temp.length !== 0) {
            bucket.push(temp.pop());
          }
          check = true;
          break; //while 탈출
        } else {
          temp.push(bucket.pop());
        }
      }
      if (!check) {
        if (temp.length === 0) {
          bucket.push(inputArr[i]);
        }
        while (temp.length !== 0) {
          bucket.push(temp.pop());
        }
      }
    }
  }
  if (bucket.length === 0) {
    return true;
  } else {
    return false;
  }
};
