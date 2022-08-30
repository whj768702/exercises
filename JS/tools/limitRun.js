function limitRun(fn, limit = 1) {
  let innerLimit = limit;
  function wrapper(...args) {
    if (fn === null) {
      return;
    }
    const callFn = fn;
    if (innerLimit === 1) {
      fn = null;
    }
    innerLimit--;
    callFn.apply(this, args);
  }
  Object.assign(wrapper, fn); // 作用是下面target也copy到返回函数上

  return wrapper;
}

function fn(msg) {
  console.log('msg: ', msg);
}
fn.target = 'fn';

const fn1 = limitRun(fn, 2);
console.log('fn1 target 1: ', fn1.target);
fn1(1111);

console.log('fn1 target 2: ', fn1.target);
fn1(2222);
fn1(3333);