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
}

module.exports = { BinarySearchTree };
