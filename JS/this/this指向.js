// 自然执行时，就是全局或undefined(严格模式下)
function f() {
  console.log(this);
}
f(); // 自然执行

const name = 'window name';
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
// 下面两个例子，点向谁就指向谁
obj.print(); // obj name
obj.innerObj.print(); // inner name
const fn = obj.print;
fn(); // window name (自然执行 this指向window)

(1, obj.print)(); // obj.print执行时指向是window
// 注意一个词，执行时this指向的是谁
// 上面相当于
const fn2 = (1, obj.print);
fn2(); // 指向window
