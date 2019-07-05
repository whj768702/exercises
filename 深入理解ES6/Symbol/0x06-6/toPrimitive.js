/*
1️⃣.数值模式:
  1.调用valueOf()方法，如果方法返回值是一个基本类型值，那么返回它.
  2.否则调用toString()方法，如果方法返回值是一个基本类型值，那么返回它.
  3.否则，抛出一个错误.
2️⃣.字符串模式：
  1.调用toString()方法，如果方法返回值是一个基本类型值，那么返回它.
  2.否则调用valueOf()方法，如果方法返回值是一个基本类型值，那么返回它。
  3.否则，抛出一个错误.
*/
// 在多数情况下，常规对象的默认模式都等价于数值模式(只有Date类型例外，它默认使用字符串模式)
// 通过定义Symbol.toPrimitive方法，可以重写这些默认的转换行为。
// Symbol.toPrimitive方法被定义在所有常规类型的原型上，规定了在对象被转换为基本类型值的
// 时候会发生什么。当需要转换时，Symbol.toPrimitive会被调用，并按照规范传入一个提示性的
// 字符串参数，该参数有3种可能：
//  1.参数值为number的时候，Symbol.toPrimitive应当返回一个数值
//  2.参数值为string的时候，Symbol.toPrimitive应当返回一个字符串
//  3.参数值为default的时候，Symbol.toPrimitive返回值类型没有特别要求

function Temperature(degrees) {
  this.degrees = degrees
}
Temperature.prototype[Symbol.toPrimitive] = function(hint) {
  switch (hint) {
    case "string":
      return this.degrees + "\u00b0"
    case "number":
      return this.degrees
    case "default":
      return this.degrees + " degrees"
  }
}

let freezing = new Temperature(32)
console.log(freezing + "!")
console.log(freezing / 2)
console.log(String(freezing))
