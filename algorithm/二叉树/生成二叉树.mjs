class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const node = new TreeNode(key);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.data > root.data) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
}

function initBinaryTree(arr) {
  let result = new BinaryTree();
  // for (let i = length; i > 0; i--) {
  // result.insert(i);
  // }
  arr.map(item => result.insert(item));

  return result;
}

// const result = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);
// console.log(result);

export { TreeNode, initBinaryTree };