let node = {
  type: 'hello',
  name: 'w'
};
function outputInfo(value) {
  console.log(value);
}
// 函数参数解构
outputInfo({type, name} = node);

// 赋值给本地变量, 匹配不上的值为undefined
let {type: localType, name: localName, value: localValue} = node;
// 可以给默认值
//let {type: localType, name: localName, value: localValue = 3} = node;
console.log(localType);
console.log(localName);
console.log(localValue);