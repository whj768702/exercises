const print = require('./a');

console.log('我是b.js');

const object = {
  name: 'b.js',
  author: 'b',
};

module.exports = function () {
  return object;
};
