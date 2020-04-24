'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

var asyncMap = function (tasks, callback) {
  //tasks가 배열이고
  //배열의 순서대로 비동기가 호출 되야?
  //()=>{task[0](callback=}
  let result = [];
  let recursion = function (idx, tasks) {
    if (idx === tasks.length) {
      callback(result);
      return;
    }
    tasks[idx]((temp) => {
      result.push(temp);
      recursion(idx + 1, tasks);
    });
  };
  recursion(0, tasks);
};
