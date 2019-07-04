// 1. Symbol.hasInstance
function MyObject() {}
let obj = new MyObject();
console.log(MyObject[Symbol.hasInstance](obj)); // true
console.log(obj instanceof MyObject); // true
// 重写Symbol.hasInstance
function SpecialNumber() {}
Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
  value: function (v) {
    return (v instanceof Number) && (v>=1&&v<=100);
  }
});
let two = new Number(2);
let zero = new Number(0);
console.log(two instanceof SpecialNumber); // true
console.log(zero instanceof SpecialNumber); // false
console.log(SpecialNumber[Symbol.hasInstance](two)); // true
console.log(SpecialNumber[Symbol.hasInstance](zero)); // false
