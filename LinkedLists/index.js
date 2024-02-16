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
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
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
    if (!this.head) return undefined;

    const current = this.head;
    const newHead = current.next;

    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const current = this.head;
      newHead.next = current;
      this.head = newHead;
    }
    this.length++;
    return this.head;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const tempNode = this.get(index);
    if (tempNode) {
      tempNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    const pre = this.get(index - 1);
    const post = this.get(index);
    newNode.next = post;
    pre.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const pre = this.get(index - 1);
    const removed = pre.next;
    pre.next = removed.next;

    this.length--;
    return removed;
  }
  //13,0,1,2
  //   null<-13<-
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
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

module.exports = { SinglyLinkedList };
