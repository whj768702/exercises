/**
 * JavaScript引擎通过这种方式为开发者提供便利， 允许我们直接使用
 * 函数的引用， 而不需要强制指定函数的定义顺序。 在代码执行之前， 函
 * 数已经存在了。
 * 需要注意的是， 这种情况仅针对函数声明有效。 函数表达式与箭头
 * 函数都不在此过程中， 而是在程序执行过程中执行定义的。
 */
console.log(typeof fun === 'function');
console.log('arrowFun: ', arrowFun); // undefined

function fun() { }

var arrowFun = () => { };