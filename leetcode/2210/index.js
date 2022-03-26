/**
 * 给你一个下标从 0 开始的整数数组 nums 。如果两侧距 i 最近的不相等邻居的值均小于 nums[i] ，
 * 则下标 i 是 nums 中，某个峰的一部分。类似地，如果两侧距 i 最近的不相等邻居的值均大于 nums[i] ，
 * 则下标 i 是 nums 中某个谷的一部分。对于相邻下标 i 和 j ，如果 nums[i] == nums[j] ，
 * 则认为这两下标属于 同一个 峰或谷。
 * 注意，要使某个下标所做峰或谷的一部分，那么它左右两侧必须 都 存在不相等邻居。
 * 返回 nums 中峰和谷的数量。
 */
// 注意：最近的不相等邻居的
const countHiValley = function (nums) {
  let result = 0;
  let pre = null;
  let next = null;
  const length = nums.length;
  for (let i = 1; i < length; i++) {
    pre = nums[i - 1];
    next = nums[i + 1];
    let temp = i;
    while (nums[i] === next) {
      next = nums[temp + 1];
      temp++;
    }
    if ((pre < nums[i] && next < nums[i]) || (pre > nums[i] && next > nums[i])) {
      result++;
    }
  }
  return result;
};
const nums = [6, 6, 5, 5, 4, 1]; // 期望3
console.log('result: ', countHiValley(nums));
