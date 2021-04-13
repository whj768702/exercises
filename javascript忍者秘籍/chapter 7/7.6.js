/**
 * 通过实例对象的constructor属性创建第二个实例。
 */
function Ninja() { }

const ninja = new Ninja();
const ninja2 = new ninja.constructor();

console.log(ninja2 instanceof Ninja); // true
console.log(ninja2.constructor === Ninja); // true
console.log(ninja2 !== ninja); // false