/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let max = min = nums[0]
  for (let i = 1; i < nums.length; i++) {
      const tempMax = max
      // 当前元素是负数的话 前一个元素越小越好
      // 所以多维护一个最小值
      max = Math.max(max * nums[i], min * nums[i], nums[i])
      min = Math.min(tempMax * nums[i], min * nums[i], nums[i])
      nums[i] = max
  }
  return Math.max(...nums)
};
// @lc code=end

