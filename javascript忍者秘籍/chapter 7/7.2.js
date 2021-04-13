// 通过原型方法创建新的实例

function Ninja() { }
Ninja.prototype.swingSword = function () { return true; }

const ninja1 = Ninja();
console.log(ninja1); // undefined

const ninja2 = new Ninja();
console.log(ninja2.swingSword()); // true