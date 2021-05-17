import { initBinaryTree } from './生成二叉树.mjs';

const tree = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);

// 验证二叉搜索树的合法性
// BST root的整个左子树都要小于root.data,整个右子树都要大于root.data

function isValidBST(root) {
  return isValidBST2(root, null, null);
}

function isValidBST2(root, min, max) {
  if (root === null) {
    return true;
  }

  if (min !== null && root.data <= min.data) {
    return false;
  }
  if (max !== null && root.data >= max.data) {
    return false;
  }

  return isValidBST2(root.left, min, root) && isValidBST2(root.right, root, max);
}

const result = isValidBST(tree.root);
console.log(result);