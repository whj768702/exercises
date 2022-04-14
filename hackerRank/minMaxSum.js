// https://www.hackerrank.com/challenges/mini-max-sum/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values
 * as a single line of two space-separated long integers.
 * Example
 * arr = [1, 3, 5, 7, 9]
 * The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9=24.
 * The function prints
 * 16 24
 */

function miniMaxSum(arr) {
  const length = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((a, b) => a + b);

  console.log(`${sum - max} ${sum - min}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
