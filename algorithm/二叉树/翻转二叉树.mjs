import { initBinaryTree } from "./生成二叉树.mjs";

const tree = initBinaryTree([4, 2, 7, 1, 3, 6, 9]);
console.log(tree);

function invertTree(root) {
  if (root === null) {
    return null;
  }

  // 前序遍历，交换左右子节点
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 继续翻转子节点
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

const result = invertTree(tree.root);
console.log(result);