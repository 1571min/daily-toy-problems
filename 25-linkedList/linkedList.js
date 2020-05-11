/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

var LinkedList = function () {
  //fill me in!
  // this.storage={};
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function (value) {
  if (this.head === null) {
    this.head = this.makeNode(value);
    this.tail = this.head;
  } else {
    let nNode = this.makeNode(value);
    this.tail.nextNode = nNode;
    this.tail = nNode;
  }
};

LinkedList.prototype.removeHead = function () {
  let temp = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.nextNode;
  }
  delete temp;
  return;
};

LinkedList.prototype.contains = function (value) {
  let itter = this.head;
  while (itter !== null) {
    if (itter.value === value) {
      return true;
    }
    itter = itter.nextNode;
  }
  return false;
};

LinkedList.prototype.makeNode = function (value) {
  let newNode = {
    value: value,
    nextNode: null,
  };

  return newNode;
};
