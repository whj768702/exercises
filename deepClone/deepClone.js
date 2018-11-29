function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue;
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : {};
      //arguments.callee(prop, obj[i]);
      deepClone(prop, obj[i]);
    } else if (typeof prop === 'function') {
      obj[i] = new Function("return " + prop.toString())();
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
let a = {print: function(value){console.log('111111' + value);}}
let b = {};

deepClone(a, b);