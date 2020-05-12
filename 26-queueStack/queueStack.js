/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function () {
  this.storage = {};
  this.top = -1;
  // add an item to the top of the stack
  this.push = function (item) {
    this.storage[++this.top] = item;
  };

  // remove an item from the this.top of the stack
  this.pop = function () {
    let deleteItem = this.storage[this.top];
    this.top -= 1;
    return deleteItem;
  };

  // return the number of items in the stack
  this.size = function () {
    return this.top + 1;
  };
};

/**
 * Queue Class
 */
var Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (item) {
    // TODO: implement `enqueue`
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    // TODO: implement `dequeue`
    while (inbox.size() !== 0) {
      outbox.push(inbox.pop());
    }
    let result = outbox.pop();
    while (outbox.size() !== 0) {
      inbox.push(outbox.pop());
    }
    return result;
  };

  // should return the number of items in the queue
  this.size = function () {
    // TODO: implement `size`
    return inbox.size();
  };
};
