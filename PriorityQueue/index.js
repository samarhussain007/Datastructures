class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    this.BubbleUp();

    return this;
  }
  BubbleUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[childIndex].priority < this.values[parentIndex].priority
    ) {
      [this.values[parentIndex], this.values[childIndex]] = [
        this.values[childIndex],
        this.values[parentIndex],
      ];

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }

    return this;
  }
  dequeue() {
    let arr = this.values;
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    const removed = arr.pop();
    if (this.values.length > 0) {
      this.sinkDown();
    }
    console.log(this);
    return removed;
  }

  sinkDown() {
    // stop the loop when the value is greater than both childs
    let rootIndex = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * rootIndex + 1;
      let RightChildIndex = 2 * rootIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (RightChildIndex < length) {
        rightChild = this.values[RightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = RightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[rootIndex] = this.values[swap];
      this.values[swap] = element;
      rootIndex = swap;
    }
  }
}

module.exports = { PriorityQueue };
