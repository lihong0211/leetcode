/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums.lastIndexOf(nums[i]) === i) {
      return nums[i]
    }
  }
};
// @lc code=end

