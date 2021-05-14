import { initBinaryTree } from './生成二叉树.mjs';

const tree = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);

let sum = 0;
function traverse(root) {
  if (root === null) {
    return;
  }
  traverse(root.right);
  console.log(root.data);
  sum += root.data;
  root.data = sum;
  traverse(root.left);
}
function converBST(root) {
  traverse(root);

  return root;
}

const result = converBST(tree.root);
console.log(resul);