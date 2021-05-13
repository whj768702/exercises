class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 构造二叉树的问题，根节点要做的就是想办法把自己构造出来。
// 对于每个根节点，只需要找到当前数组中最大值和对应的索引，然后递归调用左右数组构造左右子树就可以。

function maxBinaryTree(nums) {
  if (nums.length === 0) {
    return null;
  }
  let maxValue = Number.MIN_SAFE_INTEGER;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
      index = i;
    }
  }

  let root = new TreeNode(maxValue);
  root.left = maxBinaryTree(nums.slice(0, index)); // 根据索引切分左数组
  root.right = maxBinaryTree(nums.slice(index + 1)); // 根据索引切分右数组

  return root;
}

// function maxBinaryTree(nums) {
//   return buildNode(nums, 0, nums.length - 1);
// }

function buildNode(nums, lo, hi) {
  if (lo > hi) {
    return null;
  }
  let index = -1;
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = lo; i <= hi; i++) {
    if (maxValue < nums[i]) {
      maxValue = nums[i];
      index = i;
    }
  }
  let root = new TreeNode(maxValue);
  root.left = buildNode(nums, lo, index - 1);
  root.right = buildNode(nums, index + 1, hi);

  return root;
}

const result = maxBinaryTree([3, 2, 1, 6, 0, 5]);
console.log(result);