const add = function (x, y) {
  return x + y;
};
const multiply = function (x, y) {
  return x * y;
};

const a = 4;
const b = 2;
const c = 0;

const result = add(multiply(b, add(a, c)), multiply(a, b));
console.log('result:', result);

// 结合律 add(add(x,y),z) === add(x,add(y,z))
// 交换律 add(x, y) === add(y, x)
// 同一律 add(x, 0) === x
// 分配律 multiply(x, add(y, z)) === add(multiply(x, y), multiply(x, z))
//
// 1. add(multiply(b, add(a, c)), multiply(a, b))
// 2. add(multiply(b, a), multiply(a, b))
// 3. multiply(b, add(a, a));
const result2 = multiply(b, add(a, a));
console.log('result2:', result2);
