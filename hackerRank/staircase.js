// https://www.hackerrank.com/challenges/staircase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
/**
 * This is a staircase of size :
 *   #
 *  ##
 * ###
 *####
 */

function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    for (let j = 0; j < i + 1; j++) {
      str += '#';
    }
    console.log(str);
  }
}
staircase(4);
