/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let result = '';
  const length = s.length;

  function palindrome(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  for (let i = 0; i < length; i++) {
    let s1 = palindrome(s, i, i);
    let s2 = palindrome(s, i, i + 1);

    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }

  return result;
};
// @lc code=end

