// 到下一个圣诞节的天数
// 距离某一天还有多少天，用两个日期之间时间戳差值除去一天的毫秒数。

function nextChristmas() {
    const today = new Date();
    const nextCmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() > 25) {
        nextCmas.setFullYear(today.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24;
    const includeToday = Math.ceil((nextCmas.getTime() - today.getTime())/oneDay);
    const excludeToday = Math.floor((nextCmas.getTime() - today.getTime())/oneDay);
    return {
        include: `包含今天，还有${includeToday}天`,
        exclude: `不包含今天，还有${excludeToday}天`
    }
}
console.log(nextChristmas().include);
console.log(nextChristmas().exclude);