import { TreeNode, initBinaryTree } from './生成二叉树.mjs';

/**
 * 删除二叉搜索树中的节点
 */
// 右子树中最小的节点
function deleteNode(root, key) {
  if (root === null) {
    return null;
  }
  if (root.data === key) {
    // 末端的话，两个子节点都是空，直接删除
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }

    // 有两个节点，找到
    // 右子树中最小的节点
    // 或者左子树中最大的节点
    // 来接替被删位置
    const minNode = getMin(root.right);
    root.data = minNode.data;
    root.right = deleteNode(root.right, minNode.data);
  } else if (root.data > key) {
    // 只有一个非空子节点，让该孩子接替被删位置
    root.left = deleteNode(root.left, key);
  } else if (root.data < key) {
    // 只有一个非空子节点，让该孩子接替被删位置
    root.right = deleteNode(root.right, key);
  }

  return root;
}

// 左子树中最大的节点
function deleteNode2(root, key) {
  if (root === null) {
    return null;
  }
  if (root.data === key) {
    // 末端的话，两个子节点都是空，直接删除
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }

    // 有两个节点，找到
    // 左子树中最大的节点
    // 或者右子树中最小的节点
    // 来接替被删位置
    const maxNode = getMax(root.left);
    root.data = maxNode.data;
    root.left = deleteNode2(root.left, maxNode.data);
  } else if (root.data > key) {
    // 只有一个非空子节点，让该孩子接替被删位置
    root.left = deleteNode2(root.left, key);
  } else if (root.data < key) {
    // 只有一个非空子节点，让该孩子接替被删位置
    root.right = deleteNode2(root.right, key);
  }

  return root;
}

function getMin(node) {
  while (node.left !== null) {
    node = node.left;
  }

  return node;
}
function getMax(node) {
  return node;
}

const tree = initBinaryTree([5, 3, 6, 2, 4, null, 7]);
const result = deleteNode(tree.root, 3);
console.log(result); // 5 4 6 2 null null 7

const tree2 = initBinaryTree([5, 3, 6, 2, 4, null, 7]);
const result2 = deleteNode2(tree2.root, 3);
console.log(result2); // 5 2 6 null 4 null 7