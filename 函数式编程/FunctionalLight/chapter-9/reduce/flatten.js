const flatten = (arr) => arr.reduce((list, v) => list.concat(Array.isArray(v) ? flatten(v) : v), []);

console.log(flatten([[1, 2, 3], [4, 5], [6], 7, 8]));

// 可配置深度的展开
const flattenWithDepth = (arr, depth = Infinity) =>
  arr.reduce((list, v) => list.concat(depth > 1 && Array.isArray(v) ? flattenWithDepth(v, depth - 1) : [v]), []);

console.log(flattenWithDepth([[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]], 0));
// [[0,1],2,3,[4,[5,6,7],[8,[9,[10,[11,12],13]]]]]

console.log(flattenWithDepth([[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]], 1));
// [0,1,2,3,4,[5,6,7],[8,[9,[10,[11,12],13]]]]

console.log(flattenWithDepth([[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]], 2));
// [0,1,2,3,4,5,6,7,8,[9,[10,[11,12],13]]]

console.log(flattenWithDepth([[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]], 3));
// [0,1,2,3,4,5,6,7,8,9,[10,[11,12],13]]

console.log(flattenWithDepth([[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]], 4));
// [0,1,2,3,4,5,6,7,8,9,10,[11,12],13]

console.log(flattenWithDepth([[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]], 5));
// [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
