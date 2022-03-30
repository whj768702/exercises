const R = require('ramda');

const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const square = (x) => x * x;
const double = (x) => x * 2;

[increment, decrement, square].map((fn) => R.compose(fn, double)).map((fn) => console.log(fn(3)));
