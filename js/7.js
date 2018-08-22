// 找出2014至2050年之间，1月1号是周日的年份。

function findSunday() {
    for (let year = 2014; year <= 2050; year++){
        const date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log(`${year}年1月1日是周日。`);
        }
    }
}

findSunday();