function doSomething () {}
console.log(doSomething.name); // doSomething

const doAnotherThing = function () {}
console.log(doAnotherThing.name); // doAnotherThing

const print = function printElse() {}
console.log(print.name); // printElse

const person = {
  get firstName () {
    return 'x';
  },
  set firstName (value) {
    this.firstName = value;
  },
  sayName: function() {}
};
console.log(person.sayName.name);
const descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor.get.name);
console.log(descriptor.set.name);

const printSomething = function printSomethingElse () {}
console.log(printSomething.bind().name);
console.log(printSomething.apply.name);
console.log(printSomething.call.name);

console.log((new Function()).name);
