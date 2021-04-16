const elements = {
  length: 0,
  add: function (elem) {
    Array.prototype.push.call(this, elem);
  },
  gather: function (id) {
    this.add(id);
  },
  find: function (callback) {
    return Array.prototype.find.call(this, callback);
  }
}

elements.gather(1);
console.log(elements.length);
elements.gather('second');

