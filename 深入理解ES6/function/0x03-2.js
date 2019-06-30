// 参数默认值的暂时性死区
function add(first = second, second) {
  return first + second
}
console.log(add(1, 1)) // 2
console.log(add(1)); // NaN
console.log(add(undefined, 1)) // ReferenceError: second is not defined

/*
 1.调用add(1, 1)可表示为
  let first = 1;
  let second = 1;
 2.调用add(undefined, 1)可表示为
  let first = second; // second存在于暂时性死区内，所以报错
  let second = 1;
*/