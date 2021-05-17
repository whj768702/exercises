import { TreeNode, initBinaryTree } from './生成二叉树.mjs';

const tree = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);

function insertIntoBST(root, data) {
  if (root === null) {
    return new TreeNode(data);
  }

  if (root.data < data) {
    root.right = insertIntoBST(root.right, data);
  }
  if (root.data > data) {
    root.left = insertIntoBST(root.left, data);
  }

  return root;
}

const result = insertIntoBST(tree.root, 20);
console.log(result);