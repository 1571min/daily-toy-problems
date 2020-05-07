/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function (key, value) {
    // TODO: implement `insert()`
    let index = getIndexBelowMaxForKey(key, storageLimit);
    if (index !== -1) {
      if (!storage[index]) {
        storage[index] = [key, value];
      } else {
        for (let i = index; i < 1000; i++) {
          if (!storage[i] || storage[i][0] === key) {
            storage[i] = [key, value];
          }
        }
      }
    }
  };

  result.retrieve = function (key) {
    // TODO: implement `retrieve()`
    let index = getIndexBelowMaxForKey(key, storageLimit);
    if (index !== -1) {
      for (let i = index; i < 1000; i++) {
        if (storage[i]) {
          if (storage[i][0] === key) {
            return storage[i][1];
          }
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  };

  result.remove = function (key) {
    // TODO: implement `remove()`
    let index = getIndexBelowMaxForKey(key, storageLimit);
    if (index !== -1) {
      for (let i = index; i < 1000; i++) {
        if (storage[i]) {
          if (storage[i][0] === key) {
            delete storage[i][1];
          }
        }
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
