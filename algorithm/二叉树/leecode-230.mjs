import { initBinaryTree } from './生成二叉树.mjs';

const tree = initBinaryTree([19, 8, 15, 24, 45, 12, 5]);

let res = 0;
let rank = 0;
function traverse(root, k) {
  if (root === null) {
    return;
  }
  traverse(root.left, k);
  rank++;
  if (k === rank) {
    res = root.data;
    return;
  }
  traverse(root.right, k);
}

function kthSmallest(root, k) {
  traverse(root, k);
  return res;
}
const result = kthSmallest(tree.root, 3);
console.log(result);