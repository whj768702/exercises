/**
 * extends实现继承
 */
class Person {
  constructor(name) {
    this.name = name;
  }
  dance() {
    console.log('dance');
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name); // 使用关键字super调用基类构造函数
    this.weapon = weapon;
  }
  wieldWeapon() {
    return true;
  }
}

const person = new Person('Bob');
console.log(person instanceof Person); // true

const ninja1 = new Ninja('Yoshi', 'wakizashi');
console.log(ninja1 instanceof Ninja); // true