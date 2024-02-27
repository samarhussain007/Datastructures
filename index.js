//////////////////////////////////////////////////////////////////
///////////////////////// DATA STRUCTURES ////////////////////////
/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let value = new Node(val);
    if (!this.head) {
      this.head = value;
      this.tail = value;
    } else {
      this.tail.next = value;
      this.tail = value;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;
    // let counter = 0;
    // let result = this.head;
    // while (counter !== i) {
    //   result = result.next;
    //   counter++;
    // }
    // return result;
    let result = this.head;
    if (i === 0) return result;
    for (let j = 0; j < i; j++) {
      result = result.next;
    }
    return result;
  }
  set(i, val) {
    let node = this.get(i);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return Boolean(this.push(val));
    if (i === 0) return !!this.unshift(val);

    let prev = this.get(i - 1);
    let temp = prev.next;
    let newNode = new Node(val);
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i > this.length) return undefined;
    if (i === this.length - 1) return !!this.pop();
    if (i === 0) return !!this.shift();
    let prev = this.get(i - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
let list = new SinglyLinkedList();
// list.push("hello");
// list.push("hey");
// list.push("lol");
// list.push("yo");
// // // console.log(list.pop());
// // console.log(list.shift());
// // list.shift();
// // list.shift();
// // list.shift();
// // console.log(list.unshift("tarik"));
// // list.push("hello");
// // list.traverse();
// // console.log(list.get(1));
// // console.log(list);
// list.set(2, "samar");
// console.log(list.insert(2, "yolo"));
// console.log(list.insert(5, "yolo"));
// console.log(list.remove(2));
// console.log(list.remove(1));
// console.log(list.remove(1));
// console.log(list.remove(1));
// list.traverse();
// console.log(list);
// let first = new Node("hi");
// first.next = new Node("hey");

// console.log(first);

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.pop());
*/
///////////////////////////////////////////////////////
// DOUBLY LINKED LIST
/*
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }

    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(id) {
    if (id < 0 || id > this.length - 1) return null;
    let mid = Math.floor(this.length / 2);
    if (id <= mid) {
      console.log("Working from the strt");
      let count = 0;
      let current = this.head;
      while (count !== id) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      console.log("Working from the end");

      let count = this.length - 1;
      let current = this.tail;
      while (count !== id) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(i, val) {
    let current = this.get(i);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }
  insert(i, val) {
    if (i < 0 || i >= this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length - 1) return !!this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(i - 1);
    let afterNode = beforeNode.next;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return !!this.shift();
    if (i === this.length - 1) return !!this.pop();
    let current = this.get(i);
    let beforeNode = current.prev;
    let afterNode = current.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    current.next = null;
    current.prev = null;
    this.length--;
    return current;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    while (node) {
      let next = node.next;
      let prev = node.prev;
      node.next = prev;
      node.prev = next;
      node = next;
    }
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new DoubleLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
// console.log(list.push(5));
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(1));
// console.log(list.unshift(2));
console.log(list);
console.log(list.get(1));
console.log(list.set(1, 8));
console.log(list.insert(2, 10));
console.log(list.remove(2));
console.log(list);
list.traverse();
console.log("----------------------------------");
console.log(list.reverse());
list.traverse();
*/

/////////////////////////////////////////////////////////
// Stacks

// let stack = [];

// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");

// console.log(stack);
// console.log(stack.pop());
/*
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      this.first.next = current;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let current = this.first;
    this.first = current.next;
    current.next = null;
    this.length--;
    if (this.length === 0) this.last = null;
    return current;
  }
}

let stack = new Stack();
console.log(stack.push("hello"));
console.log(stack.push("hey"));
console.log(stack.push("samar"));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
*/

///////////////////////////////////////////////////
// Queues
/*
let q = [];

q.push("first");
q.push("Seccond");
q.push("3");

q.shift();
console.log(q);

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.tail;
      current.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    current.next = null;
    this.length--;
    if (!this.length) this.tail = null;
    return current;
  }
}

const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
*/

///////////////////////////////////////////////////////
// TREES
/*
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let root = this.root;
    while (true) {
      if (root.value === newNode.value) return undefined;
      if (root.value < newNode.value) {
        if (!root.right) {
          root.right = newNode;
          return this;
        }
        root = root.right;
      } else if (root.value > newNode.value) {
        if (!root.left) {
          root.left = newNode;
          return this;
        }
        root = root.left;
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let root = this.root,
      found = false;
    while (root && !found) {
      if (val > root.value) {
        root = root.right;
      } else if (val < root.value) {
        root = root.left;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return root;
  }

  contains(val) {
    if (!this.root) return false;

    let root = this.root,
      found = false;
    while (root && !found) {
      if (val > root.value) {
        root = root.right;
      } else if (val < root.value) {
        root = root.left;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let root = this.root,
      queue = [],
      data = [];
    queue.push(root);
    while (queue.length) {
      root = queue.shift();
      data.push(root.value);

      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    return data;
  }

  DfsPreOrder() {
    let current = this.root,
      // data = [],
      queue = [];

    function helper(node) {
      queue.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(current);
    return queue;
  }

  DfsPostOrder() {
    let current = this.root,
      queue = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      queue.push(current.value);
    }

    traverse(current);
    return queue;
  }

  DfsInOrder() {
    let current = this.root;
    let queue = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      queue.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return queue;
  }
}
const tree = new BinarySearchTree();
// console.log(tree.insert(10));
// console.log(tree.insert(12));
// console.log(tree.insert(21));
// console.log(tree.insert(11));
// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(2));
// console.log(tree.find(21));
// console.log(tree.contains(10));

// console.log(tree.BFS());
// console.log(tree.DfsPreOrder());
// console.log(tree.DfsPostOrder());
// console.log(tree.DfsInOrder());
*/
/////////////////////////////////////////
// HEAPS
/*
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.#bubbleUp();
  }

  remove() {
    if (this.values.length > 0) {
      this.#swap(this.values, 0, this.values.length - 1);
      const removed = this.values.pop();
      console.log("removed:" + removed);
      this.#sinkDown();
    }
  }

  #swap(arr, ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  }

  #bubbleUp() {
    let arr = this.values;
    let index = this.values.length - 1;
    let element = arr[index];
    let parentIndex = Math.floor((index - 1) / 2);

    while (arr[parentIndex] < element && index > 0) {
      this.#swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  #sinkDown() {
    let arr = this.values;
    let parentIndex = 0;
    let lChild = 2 * parentIndex + 1;
    let rChild = 2 * parentIndex + 2;
    let max = 0;
    let maxIndex;

    while (arr[parentIndex] < arr[lChild] || arr[parentIndex] < arr[rChild]) {
      if (arr[lChild] > arr[parentIndex] && arr[rChild] > arr[parentIndex]) {
        max = Math.max(arr[lChild], arr[rChild]);
        maxIndex = arr.indexOf(max);
        this.#swap(arr, maxIndex, parentIndex);
        parentIndex = maxIndex;
      } else if (arr[lChild] > arr[parentIndex]) {
        this.#swap(arr, lChild, parentIndex);
        parentIndex = lChild;
      } else if (arr[rChild] > arr[parentIndex]) {
        this.#swap(arr, rChild, parentIndex);
        parentIndex = rChild;
      }
      lChild = 2 * parentIndex + 1;
      rChild = 2 * parentIndex + 2;
    }
    return arr;
  }
}

const maxHeap = new MaxBinaryHeap();
[41, 39, 55, 18, 27, 12, 33].forEach((el) => maxHeap.insert(el));
maxHeap.remove();
maxHeap.remove();
maxHeap.remove();
maxHeap.remove();
maxHeap.remove();
maxHeap.remove();
maxHeap.remove();
console.log(maxHeap);
*/
/*
class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  #bubbleUp() {
    let arr = this.values;
    let index = this.values.length - 1;
    let element = arr[index];
    let parentIndex = Math.floor((index - 1) / 2);

    while (arr[parentIndex]?.priority > element.priority && index > 0) {
      this.#swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.#bubbleUp();
  }

  dequeue() {
    if (this.values.length > 0) {
      this.#swap(this.values, 0, this.values.length - 1);
      const removed = this.values.pop();
      console.log("removed:" + removed.value);
      this.#sinkDown();
    }
  }

  #sinkDown() {
    let arr = this.values;
    let parentIndex = 0;
    let lChild = 2 * parentIndex + 1;
    let rChild = 2 * parentIndex + 2;
    let min = 0;
    let minIndex;

    console.log(arr[parentIndex].priority);
    console.log(arr[lChild].priority);

    while (
      arr[parentIndex]?.priority > arr[lChild]?.priority ||
      arr[parentIndex]?.priority > arr[rChild]?.priority
    ) {
      if (
        arr[lChild].priority < arr[parentIndex].priority &&
        arr[rChild].priority < arr[parentIndex].priority
      ) {
        min = Math.min(arr[lChild].priority, arr[rChild].priority);
        minIndex = arr.findIndex((el) => el.priority === min);
        console.log(minIndex);
        this.#swap(arr, minIndex, parentIndex);

        parentIndex = minIndex;
      } else if (arr[lChild].priority < arr[parentIndex].priority) {
        this.#swap(arr, lChild, parentIndex);
        parentIndex = lChild;
      } else if (arr[rChild].priority < arr[parentIndex].priority) {
        this.#swap(arr, rChild, parentIndex);
        parentIndex = rChild;
      }
      lChild = 2 * parentIndex + 1;
      rChild = 2 * parentIndex + 2;
    }
    return arr;
  }

  #swap(arr, ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  }
}

const queue = new PriorityQueue();

queue.enqueue("head ache", 10);
queue.enqueue("concussion", 5);
queue.enqueue("heart attack", 1);
queue.enqueue("heart attack2", 4);
queue.enqueue("cancer", 2);

queue.dequeue();
queue.dequeue();

queue.enqueue("braintumor", 3);
console.log(queue);
*/

/*
const { SinglyLinkedList } = require("./LinkedLists/index.js");

const newInstance = new SinglyLinkedList();

newInstance.push(1);
newInstance.push(2);
newInstance.push(10);
newInstance.push(100);
newInstance.push(10000);
newInstance.push(1000);

// newInstance.traverse();
// newInstance.get(0);
// newInstance.set(2, -1);
// newInstance.traverse();

// newInstance.traverse();

// newInstance.remove(1);
// newInstance.traverse();
newInstance.reverse().traverse();
*/

/*
const { DoublyLinkedList } = require("./DLL");
const DLLInstance = new DoublyLinkedList();

DLLInstance.push(10);
DLLInstance.push(100);
DLLInstance.push(1000);
DLLInstance.pop();

console.log(DLLInstance.shift());
console.log(DLLInstance.unshift(999));
console.log(DLLInstance.unshift("fuck"));
console.log(DLLInstance.unshift("hehe"));

// console.log(DLLInstance.get(3));
// DLLInstance.insert();
DLLInstance.insert(2, 0);
console.log(DLLInstance.remove(3));
DLLInstance.traverse();
*/
/*
const { Stack } = require("./Stack");

const stackInstance = new Stack();

stackInstance.push(10);
stackInstance.push(1);
stackInstance.push(1000);

console.log(stackInstance.pop());
console.log(stackInstance.pop());
console.log(stackInstance.pop());
console.log(stackInstance.pop());
*/

/*
const { Queue } = require("./Queue");

const QueueInstance = new Queue();

console.log(QueueInstance.enqueue(1));
console.log(QueueInstance.enqueue(2));
console.log(QueueInstance.enqueue(3));
console.log(QueueInstance.enqueue(4));

console.log(QueueInstance.dequeue());
console.log(QueueInstance.dequeue());
console.log(QueueInstance.dequeue());
console.log(QueueInstance.dequeue());
console.log(QueueInstance.dequeue());
console.log(QueueInstance.dequeue());
*/

/*
const { BinarySearchTree } = require("./BST");

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// console.log(bst.root);
bst.BFS();
bst.DFSPRE();
bst.DFSPOST();
bst.DFSIN();

// console.log(bst.root);
*/

/*
const { Heaps } = require("./HEAPS");

const HeapInstance = new Heaps();

console.log(HeapInstance.insert(10));
console.log(HeapInstance.insert(100));
console.log(HeapInstance.insert(1000));
console.log(HeapInstance.insert(200));
console.log(HeapInstance.insert(20));
console.log(HeapInstance.insert(50));
console.log(HeapInstance.insert(1));
console.log(HeapInstance.insert(900));

console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
console.log(HeapInstance.extractMax());
*/

/*
const { PriorityQueue } = require("./PriorityQueue");

const pqInstance = new PriorityQueue();

console.log(pqInstance.enqueue("this is third", 3));
console.log(pqInstance.enqueue("this is second", 2));
console.log(pqInstance.enqueue("this is first", 1));
console.log(pqInstance.dequeue());
*/

const { hashTable } = require("./hashTable");
const hsInstance = new hashTable();

hsInstance.set("A", "#444");
hsInstance.set("B", "#000");
hsInstance.set("AB", "#100");
hsInstance.set("ABC", "#100");
hsInstance.set("ABC", "#1000");
"hello", hsInstance.get("A");
"hello", hsInstance.get("B");
console.log("hello1", hsInstance.keys());
console.log("hello1", hsInstance.values());

let obj = {
  hello: 10,
  key: 1000,
  hello1: 1000,
  hello1: 10001,
};
