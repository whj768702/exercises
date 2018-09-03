// 编写一个JavaScript程序来删除给定字符串指定位置的字符并返回新字符串。
// String: slice(beginIndex[, endIndex]) :返回beignIndex到endIndex之间的新字符串，对原字符串没影响.
// slice: 切下 切开  部分
// splice: 拼接 结合 (Array中才有splice)

function dealString(str, postion) {
    if (postion > str.length) {
      return str;
    } else {
      return str.slice(0, postion) + str.slice(postion+1, str.length);
    }
}

console.log(dealString("Python", 0));
console.log(dealString("Python", 3));
console.log(dealString("Python", 5));