import { initBinaryTree } from "./生成二叉树.mjs";

const tree = initBinaryTree([19, 8, 15, 24, 5, 5, 5]);

const memo = new Map();
const res = [];

function traverse(root) {
  if (root === null) {
    return '#';
  }
  // 后序遍历，先知道左右子树长啥样,再加上自己，就是整颗子树的样子
  let left = traverse(root.left);
  let right = traverse(root.right);

  // 序列化树的结构
  let subTree = `${left},${right},${root.data}`;

  let freq = memo.get(subTree) || 0;

  if (freq === 1) {
    res.push(root);
  }
  memo.set(subTree, freq + 1);

  return subTree;
}

function findDumplicateSubtrees(root) {
  traverse(root);
  return res;
}
const result = findDumplicateSubtrees(tree);
console.log(result);
