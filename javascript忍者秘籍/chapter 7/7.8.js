function Person() {
}
Person.prototype.dance = function () { console.log('I can dance'); }
Person.prototype.name = 'person';

function Ninja() {
}
Ninja.prototype = new Person();

const person = new Person();
const ninja = new Ninja();
console.log(ninja.constructor === Ninja); // false
console.log(ninja instanceof Ninja); // true
console.log(ninja instanceof Person); // true
console.log(ninja.dance()); // I can dance
console.log(ninja.name); // person

Person.prototype.name = 'person2';
const ninja2 = new Ninja();
console.log(ninja2.name); // person2
console.log(ninja.name); // person2