// 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的this将被丢弃。
const puppet = {
  rules: false
};
function Emperor() {
  this.rules = true;
  return puppet;
}

const emperor = new Emperor();
console.log(emperor === puppet); // true
console.log(emperor.rules); // false

// 如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。
function Ninja() {
  this.skulk = function () {
    return true;
  }
  return 1;
}
const ninja = new Ninja();
console.log(ninja === 1); // false
console.log(ninja.skulk()); // true