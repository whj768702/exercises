// 函数调用的方式

function ninja() {
  console.log(this); // window
}

function samurai() {
  "use strict";
  console.log(this); // undefined
}

ninja();
samurai();