// 闰年
function leapYear(year) {
    const result = !(year % 100) ? !(year % 400) : !(year % 4);
    return `${year}年${result ? '是' : '不是'}闰年。`
}
console.log(leapYear(2018));
console.log(leapYear(2000));