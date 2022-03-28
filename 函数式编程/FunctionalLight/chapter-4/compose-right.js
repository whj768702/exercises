// 单参数
function compose(...fns) {
  return function composed(result) {
    return [...fns].reverse().reduce(function (result, fn) {
      return fn(result);
    }, result);
  };
}
const composeES6 =
  (...fns) =>
  (result) =>
    [...fns].reverse().reduce((result, fn) => fn(result), result);

function compose2(...fns) {
  return function composed(...args) {
    return [...fns].reverse().reduce((result, fn) => fn(result), args);
  };
  // return fns.reverse().reduce(function (fn1, fn2) {
  //   return function composed(...args) {
  //     return fn2(fn1(...args));
  //   };
  // });
}
function fn1(arg) {
  console.log('fn1: ', arg);
  return arg;
}
function fn2(arg) {
  console.log('fn2: ', arg);
  return arg;
}
// let result = compose(fn1, fn2)('aaa');
// console.log('result: ', result);

let result2 = compose2(fn1, fn2)('aaa', 'bbb');
console.log('result2: ', result2);
