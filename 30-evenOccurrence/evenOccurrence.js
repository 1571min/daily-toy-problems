/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function (arr) {
  // Your code here.
  let result = null;
  let countObj = arr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {});

  for (const key in countObj) {
    if (countObj[key] % 2 === 0) {
      if (!Number(key)) {
        result = key;
      } else {
        result = Number(key);
      }
      break;
    }
  }

  return result;
};
