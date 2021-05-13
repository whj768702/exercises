import { initBinaryTree } from "./生成二叉树.mjs";

const tree = initBinaryTree([4, 2, 7, 1, 3, 6, 9]);
console.log(tree);

// 填充二叉树节点的右侧指针
function connect(root) {
  if (root === null || root.left === null) {
    return root;
  }
  connectTwoNode(root.left, root.right);

  return root;
}
/**
 * 二叉树的问题难点在于，如何把题目的要求细化成每个节点需要做的事情。
 * 如果只依赖一个节点的话，没有办法连接跨父节点的两个相邻节点。
 * 
 */
function connectTwoNode(node1, node2) {
  if (node1 === null || node2 === null) {
    return;
  }
  node1.next = node2;
  connectTwoNode(node1.left, node1.right);
  connectTwoNode(node2.left, node2.right);
  connectTwoNode(node1.right, node2.left);
}

const result = connect(tree.root);
console.log(result);