/**
 * 解决constructor属性的问题
 */
function Person() { }
Person.prototype.dance = function () { console.log('I can dance'); }

function Ninja() { }
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, 'constructor', {
  enumerable: false,
  value: Ninja,
  writeable: true
});

const ninja = new Ninja();

console.log(ninja.constructor === Ninja); // true