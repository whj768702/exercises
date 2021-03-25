// 存储唯一函数集合

const store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if(!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    } else {
      return 'existed'
    }
  }
};
function ninja() {}
console.log(store.add(ninja));
console.log(store.add(ninja));