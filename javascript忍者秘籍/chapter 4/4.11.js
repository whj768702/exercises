// apply call
function juggle() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  this.result = result;
}

const ninja1 = {};
const ninja2 = {};
juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);
console.log(ninja1.result);
console.log(ninja2.result);