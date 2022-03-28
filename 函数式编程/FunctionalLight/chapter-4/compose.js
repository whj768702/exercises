// 单参数
function compose(...fns) {
  return function composed(result) {
    const list = [...fns];
    while (list.length > 0) {
      result = list.pop()(result);
    }
    return result;
  };
}

function fn1(...arg) {
  console.log('fn1: ', arg);
  return arg;
}
function fn2(...arg) {
  console.log('fn2');
  return arg;
}
let result = compose(fn1, fn2)('aaaa');
console.log('result: ', result);

// 多参数
function compose2(...fns) {
  return function composed(...args) {
    const list = [...fns];
    while (list.length > 0) {
      result = list.pop()(...args);
    }
    return result;
  };
}

const result2 = compose2(fn1, fn2)('aaaa', 'bbbb');
console.log('result2: ', result2);
