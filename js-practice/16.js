// 编写一个JavaScript程序来计算两个给定整数的和。如果两个值相同，则返回它们的总和的三倍。

function sumTriple(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));