const { reduce } = require('ramda');

// reduce实现map
const double = (x) => x * 2;

const result1 = [1, 2, 3, 4, 5].map(double);
// (list.push(double(cur)), list)
// 逗号表达式 x1,x2,...,xn, 表达式都执行，最后整个表达式值是xn执行后的值
// 上面相当于每次把double(cur)放到list的最后，然后再把list返回
// reduce((list, cur) => {
//   list.push(double(cur));
//   return list;
// })
const result2 = [1, 2, 3, 4, 5].reduce((list, cur) => (list.push(double(cur)), list), []);
console.log(result1);
console.log(result2);
