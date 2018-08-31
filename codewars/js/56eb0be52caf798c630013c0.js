// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13 th in the given year.

// month从0开始，0代表一月份
// getDay: 获取星期几，星期日是0
// getDate: 获取日期.

function unluckyDays(year) {
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      ++sum;
    }
  }
  return sum;
}
console.log(unluckyDays(2015)); // 3
console.log(unluckyDays(1986)); // 1