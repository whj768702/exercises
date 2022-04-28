/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let result = '';
  let commonPrefixArr = [];
  const length = strs.length;
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      result = strs[i];
    } else {
      result = getCommonPrefix(result, strs[i]);
    }
  }
  function getCommonPrefix(target: string, source: string): string {
    let result = '';
    for (let i = 0; i < target.length; i++) {
      if (target[i] === source[i]) {
        result += target[i];
      } else {
        break;
      }
    }
    return result;
  }

  return result;
};
// @lc code=end

