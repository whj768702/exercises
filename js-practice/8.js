// 随机一个1-10的数字，猜测
// Math.round: 四舍五入取整
// Math.floor: 向下取整
// Math.ceil: 向上取整

function guessNumber() {
    return Math.ceil(Math.random()*10);
}

for (let i = 1; i < 10; i++) {
    console.log(guessNumber());
}