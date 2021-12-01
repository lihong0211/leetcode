/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - count - 1]) {
      count++
    } else {
      nums[i - count] = nums[i]
    }
  }
  return nums.length - count
};
// @lc code=end

