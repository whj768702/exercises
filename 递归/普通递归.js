// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
function factorial(n, total) {
  if (n === 1) {
    return total;
  }
  return factorial(n - 1, n*total);
}

const time1 = new Date().getTime();
console.log(factorial(10000, 1));
const time2 = new Date().getTime();
console.log(time2 - time1);