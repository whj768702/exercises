// substring(indexStart[, indexEnd]):String
// 返回新字符串

function animateString(str) {
    setInterval(() => {
        str = str[str.length - 1] + str.substring(0, str.length - 1);
        console.log(str);
    }, 100);
}
animateString('123123123');