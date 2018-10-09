Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error');
  }
  let _this = this;
  let args = [...arguments].slice(1);
  
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  }
}

const obj = {
  a: 'bind'
};
function print() {
  console.log(this.a);
}

print.bind(obj)();
print.myBind(obj)();