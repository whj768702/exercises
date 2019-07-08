// const set = new WeakSet();
const set = new Set();
const key = {};

set.add(key);
console.log(set.size);
set.delete(key);
console.log('2: ', set.size);