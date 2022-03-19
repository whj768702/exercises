// 摄氏和华氏温度转换
// C/5 = (F-32)/9

function c2f(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return `摄氏温度: ${celsius} 转成华氏温度是: ${fahrenheit}`
}

function f2c(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return `华氏温度: ${fahrenheit} 转成摄氏温度是: ${celsius}`
}
console.log(c2f(100));
console.log(f2c(212));