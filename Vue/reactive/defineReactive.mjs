function print(a, b) {
  console.log('old value: ', a);
  console.log('new value: ', b);
}
function defineReactive(data, key, val) {
  let dep = [];
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.push(print);
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      console.log('dep: ', dep);
      for (let i = 0; i < dep.length; i++) {
        dep[i](newVal, val);
      }
      val = newVal;
    },
  });
}

const data = {};
defineReactive(data, 'a', 1);
data.a = 10;
console.log('a: ', data.a);
data.a = 30;
console.log('a: ', data.a);
