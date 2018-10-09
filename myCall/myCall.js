Function.prototype.myCall = function(context1) {
  let context = context1 || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

let obj = {
  a: 'a'
};
function print() {
  console.log(this.a);
}
print.call(obj); 
print.myCall(obj); 