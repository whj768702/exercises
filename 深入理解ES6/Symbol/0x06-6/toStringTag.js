function Person(name) {
  this.name = name;
}
Person.prototype[Symbol.toStringTag] = 'Person';
let me = new Person('w');

console.log(me.toString());