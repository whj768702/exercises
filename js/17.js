// 编写一个JavaScript程序来计算指定数字和19之间的绝对差。如果指定的数字大于19，则返回其绝对差的三倍

function compare19(number)  {
    return number>19?3*(number-19):19-number;
}