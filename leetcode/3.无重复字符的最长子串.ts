/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  const length = s.length;
  let left = 0;
  let right = 0;
  const arr: { [index: string]: number } = {};

  while (right < length) {
    const chart = s[right];
    right++;
    arr[chart] = arr[chart] || 0;
    arr[chart]++;
    while (arr[chart] > 1) {
      const d = s[left];
      left++;
      arr[d]--;
    }
    result = Math.max(result, right - left);
  }
  return result;
};
// @lc code=end

