/**
 * 通过constructor属性，可以访问创建该对象时所用的函数。
 * 这个特性可以用于类型校验。
 */
function Ninja() { }

const ninja = new Ninja();

console.log(typeof ninja); // 'object'
console.log(ninja instanceof Ninja); // true
console.log(ninja.constructor === Ninja); // true
