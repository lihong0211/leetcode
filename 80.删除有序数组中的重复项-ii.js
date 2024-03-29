/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 2;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      nums[slow + 2] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow + 2;
};
// @lc code=end
