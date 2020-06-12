// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function (x, y) {
  // TODO: should return the product of x * y
  let result = 0;
  for (let i = 0; i < Math.abs(y); i++) {
    result += Math.abs(x);
  }
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) return -result;
  return result;
};

var divide = function (x, y) {
  // TODO: should return the product of x * y
  let result = 0;
  let temp = Math.abs(x) * 1000;
  while (temp > 1) {
    if (temp >= Math.abs(y)) {
      temp -= Math.abs(y);
      result += 1;
    } else {
      break;
    }
  }
  let count = 0
  let places = 0.001;
  while (result > 1000) {
    result -= 1000;
    count += 1;
  }
  for (let i = 0; i < result; i++) {
    count += places;
  }

  if ((x > 0 && y < 0) || (x < 0 && y > 0)) return -count;
  return count;
};

var modulo = function (x, y) {
  // TODO: should return the remainder of x / y
  let result = 0;
  let temp = Math.abs(x);
  while (temp > 1) {
    if (temp >= Math.abs(y)) {
      temp -= Math.abs(y);
      result += 1;
    } else {
      break;
    }
  }
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) return -temp;
  return temp;
};

// TODO: should return the remainder of x / y