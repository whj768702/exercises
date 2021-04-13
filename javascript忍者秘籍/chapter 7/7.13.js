/**
 * 使用class关键字创建类
 */
class Ninja {
  constructor(name) {
    this.name = name;
  }
  swingSword() {
    return true;
  }
}

const ninja = new Ninja('Yoshi');
console.log(ninja instanceof Ninja); // true
console.log(ninja.name); // Yoshi