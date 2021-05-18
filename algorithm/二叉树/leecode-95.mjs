import { TreeNode } from './生成二叉树.mjs';

function generateTrees(n) {
  if (n === 0) {
    return [];
  }
  return build(1, n);
}
function build(lo, hi) {
  const res = [];
  if (lo > hi) {
    res.push(null);
    return res;
  }
  for (let i = lo; i <= hi; i++) {
    const leftTree = build(lo, i - 1);
    const rightTree = build(i + 1, hi);
    leftTree.map(left => {
      rightTree.map(right => {
        const root = new TreeNode(i);
        root.left = left;
        root.right = right;
        res.push(root);
      })
    })
  }
  return res;
}

const result = generateTrees(3);
console.log(result);