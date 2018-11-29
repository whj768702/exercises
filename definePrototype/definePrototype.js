function observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  })
}

class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    })
  }
}
Dep.target = null;

function update(value) {
  document.querySelector('div').innerText = value;
}
class Watcher {
  constructor(obj, key, cb) {
    Dep.target = this;
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    Dep.target = null;
  }
  update() {
    this.value = this.obj[this.key];
    this.cb(this.value);
  }
}

function defineReactive(obj, key, val) {
  observe(val);
  let dp = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      console.log('get value');
      if (Dep.target) {
        dp.addSub(Dep.target);
      }
      return val;
    },
    set: function reactiveSetter(newVal) {
      console.log('change value: ', newVal);
      val = newVal;
      dp.notify();
    }
  })
}

let data = {
  name: 'yck'
}
observe(data);
let name = data.name;
new Watcher(data, 'name', update);
data.name = 'yyy';