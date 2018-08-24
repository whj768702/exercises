// 格式化当前时间
// 今天是     ： 星期二
// 当前时间是  ： 下午 2：20：20

enum WEEK {
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
}
function format (date: Date) {
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let flag = hours > 12 ? '下午' : '上午';
    return {
        today: `今天是： ${WEEK[day]}`,
        currentTime: `当前时间是： ${flag} ${hours%12}:${minutes}:${seconds}`
    }
}
console.log(format(new Date()).today);
console.log(format(new Date()).currentTime);