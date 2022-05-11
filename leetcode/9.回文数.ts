/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const strX = Number(x).toString();
  const length = strX.length;
  const middle = Math.floor(length / 2);
  for (let i = 0; i < middle; i++) {
    if (strX[i] !== strX[length - 1 - i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

