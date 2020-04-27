/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  let countObj = {};
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count += 1;
    } else {
      let newObj = {
        start: i !== 1 ? i - count + 1 : i - 1,
        end: i,
        count: count,
      };
      countObj[i] = newObj;
      count = 1;
    }
  }
  return searchMax(countObj);
};

function searchMax(cntObj) {
  let max = {
    result: [0, 0],
    count: 0,
  };
  for (const key in cntObj) {
    if (max.count < cntObj[key].count) {
      max.result = [cntObj[key].start, cntObj[key].end];
      max.count = cntObj[key].count;
    }
  }
  return max.result;
}

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
