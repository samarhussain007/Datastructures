class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    function helper(node) {
      if (!node) {
        return newNode;
      }
      const val = node.value;
      if (newNode.value > val) {
        node.right = helper(node.right);
      } else {
        node.left = helper(node.left);
      }
      return node;
    }
    helper(this.root);
    return this;
  }
  // find(value) {
  //   if (!this.root) return false;
  //   const currentVal = this.root.value;

  //   if (value === currentVal) {
  //     return true;
  //   }

  //   function helper(node) {
  //     if (!node) {
  //       return false;
  //     } else if (node.value === value) {
  //       return true;
  //     }

  //     const val = node.value;
  //     if (value > val) {
  //       return helper(node.right);
  //     } else {
  //       return helper(node.left);
  //     }
  //   }

  //   return helper(this.root);
  // }
  find(value) {
    if (!this.root) return false;

    function helper(node) {
      if (!node) return false;
      if (node.value === value) return true;
      return value > node.value ? helper(node.right) : helper(node.left);
    }

    return helper(this.root);
  }
  BFS() {
    let Result = [];
    let Queue = [];
    let node = this.root;
    Queue.push(node);

    while (Queue.length > 0) {
      let value = Queue.shift();
      Result.push(value);
      if (value.left) {
        Queue.push(value.left);
      }
      if (value.right) {
        Queue.push(value.right);
      }
    }
    return Result;
  }
  DFSPRE() {
    let Result = [];
    let current = this.root;
    function helper(node) {
      Result.push(node);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(current);
    const mappedData = Result.map((el) => el.value);
    console.log(mappedData);
    return Result;
  }
  DFSPOST() {
    let Result = [];
    let current = this.root;
    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
      Result.push(node);
    }
    helper(current);
    const mappedData = Result.map((el) => el.value);
    console.log(mappedData);
    return Result;
  }
  DFSIN() {
    let Result = [];
    let current = this.root;
    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      Result.push(node);
      if (node.right) {
        helper(node.right);
      }
    }
    helper(current);
    const mappedData = Result.map((el) => el.value);
    console.log(mappedData);
    return Result;
  }
}

module.exports = { BinarySearchTree };
