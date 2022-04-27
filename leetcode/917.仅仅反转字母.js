/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const length = s.length;
  const stack = [];
  let result = '';
  for (let i = 0; i < length; i++) {
    let code = s.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      stack.push(s[i]);
    }
  }
  for (let i = 0; i < length; i++) {
    let code = s.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      result += stack.pop();
    } else {
      result += s[i];
    }
  }

  return result;
};
// @lc code=end
