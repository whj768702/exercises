/**
 * 定义makeLoggable函数，设置对象读取和设置对象属性时的记录 
 */
function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, key) => {
      // 在这里记录属性读操作
      console.log(`get ${key} value`);
      return target[key];
    },
    set: (target, key, value) => {
      // 在这里记录属性写操作
      console.log(`set ${key}'s value: ${value}`);
      target[key] = value;
    }
  })
}

let ninja = { name: 'Yoshi' };
ninja = makeLoggable(ninja);
console.log('ninja name: ', ninja.name);

ninja.weapon = 'sword';