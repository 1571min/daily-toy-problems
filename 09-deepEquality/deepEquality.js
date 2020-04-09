/*
 * 두 개의 객체가 주어졌을 떄, 이 두 객체가 deeply equal한지 아닌지를 return하는 함수를 작성하세요.
 * 여기서 "deeply equal"이란, 두 객체가 같고, 각각 객체의 자식 객체의 구조가 같다는 것을 의미합니다.
 *
 * 예시 :
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * 순환객체는 고려하지 않습니다.
 * 순환객체 레퍼런스 : https://riptutorial.com/javascript/example/14476/cyclic-object-values
 */

const deepEquals = function (apple, orange) {
  // TODO: Your code here!
  return isEqualObj(apple, orange) && isEqualObj(orange, apple);
};

function isEqualObj(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        return isEqualObj(obj1[key], obj2[key]);
      } else {
        return false;
      }
    }
  }
  return true;
}
