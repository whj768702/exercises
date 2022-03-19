// 格式化当前时间
// 今天是     ： 星期二
// 当前时间是  ： 下午 2：20：20 
function format (date) {
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const day = date.getDay(); // 注意顺序,从星期日开始
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let flag = '上午';
    if (hours > 12) {
        flag = '下午';
    }
    console.log('今天是：', week[day]);
    console.log(`当前时间是：${flag} ${hours%12}:${minutes}:${seconds}`);
}
format(new Date());