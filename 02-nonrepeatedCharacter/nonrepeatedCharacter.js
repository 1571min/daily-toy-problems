/*
 * 임의의 string이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 return하는 함수를 작성하세요.
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// 객체를 이용해서 카운팅 후 비교
const firstNonRepeatedCharacter = function(string) {
  let arrStr = string.split('');
  let objStr = arrStr.reduce((acc, ele, idx) => {
    acc[ele] = acc[ele] || [0, idx];
    acc[ele][0] += 1;
    return acc;
  }, {});

  let result;
  for (let ele in objStr) {
    if (objStr[ele][0] === 1) {
      result = result || [ele, objStr[ele][1]];
      if (objStr[ele][1] < result[1]) {
        result = [ele, objStr[ele][1]];
      }
    }
  }
  if (result === undefined) {
    return null;
  }
  return result[0];
};
