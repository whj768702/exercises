/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

/**
 * 快慢两个指针，慢指针指向不重复的元素，快指针指向重复的元素,
 * 慢的不等于快的，说明不重复，快的值放到慢的中，慢的+1，快的+1 
 * 慢的等于快的，慢的不动，快的+1
 * 最后慢的+1等于不重复的元素的个数
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  const length = nums.length;

  while (fast < length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
// @lc code=end

