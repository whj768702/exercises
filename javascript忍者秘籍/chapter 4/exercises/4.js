var ninja1 = {
  whoAmI: function () {
    return this;
  }
};
var ninja2 = {
  whoAmI: ninja1.whoAmI
};

var identify = ninja2.whoAmI;

console.log(ninja1.whoAmI() === ninja1);  // true
console.log(ninja2.whoAmI() === ninja2);  // true

console.log(identify() === ninja1);  // false
console.log(identify() === ninja2);  // false
console.log(ninja1.whoAmI.call(ninja2) === ninja2);  // true
