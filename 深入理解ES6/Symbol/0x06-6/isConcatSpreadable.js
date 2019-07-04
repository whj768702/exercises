/*
Symbol.isConcatSpreadable属性是一个布尔类型的属性，
它表示目标对象拥有长度属性与数值类型的键，并且数值类型
键所对应的属性值在参与concat()调用时需要被分离为个体。
*/
// 数值类型键
let collection = {
  0: "hello",
  1: "world",
  length: 2,
  [Symbol.isConcatSpreadable]: true
}
let messages = ["hi"].concat(collection)
console.log(messages.length)
console.log(messages)


let collection2 = {
  0: "hello",
  1: "world",
  a: 'test',
  length: 3,
  [Symbol.isConcatSpreadable]: true
}
console.log(['hi'].concat(collection2))