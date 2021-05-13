import { initBinaryTree } from "./生成二叉树.mjs";

const tree = initBinaryTree([4, 2, 7, 1, 3, 6, 9]);

function flattenTree(root) {
  if (root === null) {
    return;
  }
  flattenTree(root.left);
  flattenTree(root.right);

  let left = root.left;
  let right = root.right;

  root.left = null;
  root.right = left;

  let p = root;
  while (p.right !== null) {
    p = p.right;
  }
  p.right = right;
}

const result = flattenTree(tree.root);
console.log(result);