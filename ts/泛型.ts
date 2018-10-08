function dataT<T>(value: T): T {
  return value;
}

console.log(dataT(123));
console.log(dataT('abc'));

interface ConfigFnOne {
  <T>(value:T):T;
}
let setDataOne:ConfigFnOne = function(value) {
  return value;
}

console.log(setDataOne<string>('name'));
console.log(setDataOne<number>(20));