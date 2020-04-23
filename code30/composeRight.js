// performs left-to-right function composition.

const composeRight = (...fns) => fns.reduce((f, g) => (...arg) => g(f(...arg)));

const add = (x, y) => x + y;
const square = (x) => x * x;
const addAndSquare = composeRight(add, square);
console.log(addAndSquare(1, 2));
