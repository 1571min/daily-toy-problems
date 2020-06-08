/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function (string) {
  // Your code here.
  let stringArr = string.split('');
  let result = [];
  let recursion = (Arr, count) => {
    if (count === string.length) {
      result.push(Arr.join(''));
      return;
    }
    for (let i = count; i < string.length; i++) {
      let temp = Arr[count];
      Arr[count] = Arr[i];
      Arr[i] = temp;
      recursion(Arr, count + 1);
      Arr[i] = Arr[count];
      Arr[count] = temp;
    }
  };
  recursion(stringArr, 0);
  return Array.from(new Set(result));
};
