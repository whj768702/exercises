const isOdd = (x) => x % 2 !== 0;

[1, 2, 3, 4, 5].filter(isOdd).map((x) => console.log(x));

[1, 2, 3, 4, 5].reduce((list, cur) => (isOdd(cur) ? list.push(cur) : undefined, list), []).map((x) => console.log(x));

// 数组去重
const unique = (arr) => arr.reduce((list, v) => (list.indexOf(v) === -1 ? (list.push(v), list) : list), []);
console.log(unique([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
