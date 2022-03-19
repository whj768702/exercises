// 编写一个JavaScript程序，从一个给定的字符串创建一个新的字符串，改变第一个和最后一个字符的位置。
// 字符串长度必须大于或等于1。

function changeString(str) {
  const len = str.length;
  if (len <= 1) {
    return str;
  } else {
    return str[len - 1] + str.slice(1, len - 1) + str[0]
  }
}

console.log(changeString('a'));
console.log(changeString('ab'));
console.log(changeString('abc'));