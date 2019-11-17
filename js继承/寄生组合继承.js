function Parent(value) {
  this.name = value;
}
Parent.prototype.getValue = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
/*
  寄生组合继承
  将父类的原型复制给子类，并且将构造函数设置为子类，
  既解决了无用的父类属性问题，还能正确的找到子类的构造函数。
*/
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
const child = new Child('child', 10);
child.getValue();
child.__proto__===Child.prototype