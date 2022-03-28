function pipe(...fns) {
  return function piped(result) {
    const list = [...fns];
    while (list.length > 0) {
      result = list.shift()(result);
    }
    return result;
  };
}
function fn1(arg) {
  console.log('fn1');
  return arg;
}
function fn2(arg) {
  console.log('fn2');
  return arg;
}
const result = pipe(fn1, fn2)('aaaa');
console.log('result: ', result);
