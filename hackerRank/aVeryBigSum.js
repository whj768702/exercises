// https://www.hackerrank.com/challenges/diagonal-difference/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign&h_r=next-challenge&h_v=zen
/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 * 1 2 3
 * 4 5 6
 * 9 8 9
 * The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
 */
function diagonalDifference(arr) {
  // Write your code here
  const length = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) {
        sum1 += arr[i][j];
      }
      if (i + j === length - 1) {
        sum2 += arr[i][j];
      }
    }
  }
  return Math.abs(sum1 - sum2);
}
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log(diagonalDifference(arr));
