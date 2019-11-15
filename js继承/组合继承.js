function Parent(value) {
  this.name = value
}
Parent.prototype.getValue = function() {
  console.log(this.name)
}
/* 组合继承
   优点: 不会与父类引用属性共享，可以复用父类的函数
   缺点: 子类原型上多了不需要的父类属性，存在内存上的浪费
*/
function Child(value, age) {
  Parent.call(this, value); // 继承父类的属性,Child有自己的name属性
  this.age = age;
}
Child.prototype = new Parent(123);
const child = new Child('child', 10);
child.getValue();
