/**
 * 1. 尽管我们已经完全替换了Ninja
 * 的构造器原型， 但是实例化后的Ninja对象仍然具有swingSword方法， 因为对象ninja1仍然
 * 保持着对旧的Ninja原型的引用
 * 2. 新创建的ninja2实例拥有新原型的引用， 因此不具有swingSword方法， 仅具有pierce方法
 */
function Ninja() {
  this.swung = true;
}

const ninja1 = new Ninja();
Ninja.prototype.swingSword = function () {
  return this.swung;
}

console.log(ninja1.swingSword()); // true

Ninja.prototype = {
  pierce: function () {
    return true;
  }
};

console.log(ninja1.swingSword()); // true
console.log(ninja1.pierce); // undefined

const ninja2 = new Ninja();
console.log(ninja2.pierce());
console.log(ninja2.swingSword); // undefined