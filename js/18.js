// Write a JavaScript program to check two given numbers and return true
// if one of the number is 50 or if their sum is 50.

function match50(num1, num2) {
    // return num1 === 50 || num2 === 50 || (num1 + num2 === 50) ? true : false;
    // 更简洁
    return num1 === 50 || num2 === 50 || (num1 + num2 === 50);
}
console.log(match50(50, 50))
console.log(match50(20, 50))
console.log(match50(20, 20))
console.log(match50(20, 30))