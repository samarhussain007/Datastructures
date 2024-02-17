class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return false;
    const newTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail.prev;
      this.tail.next = null;
      newTail.prev = null;
    }
    this.length--;
    return newTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (!(index >= 0 && index < this.length)) return null;
    let current, count;
    const median = Math.floor(this.length / 2);
    if (index < median) {
      current = this.head;
      count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    let tempNode = this.get(index);

    let prevNode = tempNode.prev;
    newNode.next = tempNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    tempNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    let prev = removedNode.prev;
    let next = removedNode.next;
    prev.next = next;
    next.prev = prev;

    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
module.exports = { DoublyLinkedList };
