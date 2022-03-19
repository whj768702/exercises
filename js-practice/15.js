// 编写一个JavaScript程序来获得给定数字与13之间的差值，如果这个数字大于13，返回绝对差的两倍。

function compare13 (number) {
    if (number > 13) {
        return (number - 13) * 2;
    } else {
        return 13 - number;
    }
}

console.log(compare13(32));
console.log(compare13(11));