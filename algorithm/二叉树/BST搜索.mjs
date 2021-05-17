import { initBinaryTree } from './生成二叉树.mjs';

const tree = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);

// BST特点，左子树值都比root.data小，右子树值都比root.data大。

function isInBST(root, number) {
  if (root === null) {
    return false;
  }
  if (root.data === number) {
    return true;
  }
  if (root.data > number) {
    return isInBST(root.left, number);
  }
  if (root.data < number) {
    return isInBST(root.right, number);
  }
}

const result = isInBST(tree.root, 15);
console.log(result);