// Write a JavaScript program to check a given integer is within 20 of 100 or 400.
// Math.abs() 取绝对值
//
function testHundred(x) {
  return ((Math.abs(100-x)<=20) || (Math.abs(400-x)<=20));
}

console.log(testHundred(10));
console.log(testHundred(90));
console.log(testHundred(99));
console.log(testHundred(199));
console.log(testHundred(200));