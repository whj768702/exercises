import { initBinaryTree } from './生成二叉树.mjs';

const tree = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);

// 中序遍历二叉树
// 先右后左降序；先左后右升序

let result = [];
function inorderTraversal(root) {
  traverse(root);
  return result;
}
function traverse(root) {
  if (root === null) {
    return;
  }
  traverse(root.right);
  result.push(root.data);
  traverse(root.left);
}

const temp = inorderTraversal(tree.root);
console.log(temp);