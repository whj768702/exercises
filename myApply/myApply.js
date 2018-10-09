Function.prototype.myApply = function(context1) {
  let context = context1 || window;
  context.fn = this;

  let result;
  if (arguments[1]) {
    result = context.fn(...this.arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}
const obj = {
  a: 'a'
};
function print() {
  console.log(this.a);
}
print.apply(obj);
print.myApply(obj);