// 函数作用域链执行时向外找，找的路径是<strong>定义时</strong>的作用域
// demo函数定义在全局，并没有a，所以undefined
function demo() {
  try {
    console.log('demo a: ', a);
  } catch (e) {
    console.log('e: ', e); //  ReferenceError: a is not defined
  }
}

function outer() {
  const a = 'hello';
  demo();
}
outer();
