/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      const temp = stack.pop() + s[i];
      if (temp !== '()' && temp !== '[]' && temp !== '{}') {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

