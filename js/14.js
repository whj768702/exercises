// 获取文件的后缀名
// String : indexOf(searchValue[, fromeIndex])    : 正向
// String : lastIndexOf(searchValue[, fromeIndex]): 反向  如果返账-1，代表没找到
// String : slice(beginIndex[, endIndex]) :  返回新符合的新字符串

function fileExtension (fileName) {
    const postion = fileName.lastIndexOf('.');    
    if (postion > -1) {
        return fileName.slice(postion + 1, fileName.length);
    } else {
        return 'error file name.'
    }
}

function fileExtension2 (fileName) {
    return fileName.split('.').pop();
}

console.log(fileExtension('abc.java'));
console.log(fileExtension2('a.b.js'));