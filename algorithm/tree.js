// 遍历二叉树，返回路径值和为给定值的路径

const startObj = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 7,

      },
      right: {
        value: 8
      }
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      right: {
        value: 9
      }
    },
    right: {
      value: 6,
      right: {
        value: 10
      }
    }
  }
};

let temp = [];
const resultArr = [];
function cutTree(tree, target, level = 0) {
  if (tree.left === undefined && tree.right === undefined) {
    const pathArr = [];
    for (let i = 0; i < level; i++) {
      pathArr.push(temp[i])
    }
    pathArr.push(tree.value);
    const sum = pathArr.reduce((acc, value) => acc + value, 0);
    if (sum === target) {
      resultArr.push(pathArr);
    }
  }
  temp[level] = tree.value;
  if (tree) {
    if (tree.left) {
      cutTree(tree.left, target, level + 1);
    }
    if (tree.right) {
      cutTree(tree.right, target, level + 1);
    }
  }
}

cutTree(startObj, 14);
console.log('result arr: ', resultArr);