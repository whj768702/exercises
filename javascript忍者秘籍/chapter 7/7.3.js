/**
 * 原型和实例存在相同方法，会执行实例的方法
 */
function Ninja() {
  this.swung = false;
  this.swingSword = function () {
    console.log(1);
    return !this.swung;
  }
}

Ninja.prototype.swingSword = function () {
  console.log(2);
  return this.swung;
}
const ninja = new Ninja();
console.log(ninja.swingSword());