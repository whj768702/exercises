const obj = {
  name: 'obj name',
  print: function () {
    console.log('name: ', this.name);
  },
  innerObj: {
    name: 'inner name',
    print: function () {
      console.log('inner name: ', this.name);
    },
  },
};
const obj2 = {
  name: 'obj2 name',
};

obj.print.call(obj2); // obj2 name
obj.print.apply(obj2); // obj2 name
const obj2Bind = obj.print.bind(obj2);
obj2Bind(); // obj2 name
obj.print = obj2Bind;
obj.print(); // obj2 name 破坏前三条规则，这三个强绑定
