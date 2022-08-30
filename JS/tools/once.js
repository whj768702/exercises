function once(fn) {
  function wrapper(...args) {
    if (fn === null) {
      return;
    }
    const callFn = fn;
    fn = null;
    callFn.apply(this, args);
  }
  Object.assign(wrapper, fn); // 作用是下面target也copy到返回函数上

  return wrapper;
}

function fn(msg) {
  console.log('msg: ', msg);
}
fn.target = 'fn';

const fn1 = once(fn);
console.log('fn1 target 1: ', fn1.target);
fn1(1111);

console.log('fn1 target 2: ', fn1.target);
fn1(2222);