const getMessage = require('./b');

console.log('我是a.js');

exports.print = function () {
  const message = getMessage();
  console.log('a message: ', message);
};
