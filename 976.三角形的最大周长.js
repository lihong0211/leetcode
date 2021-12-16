/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
  let res = 0
  nums = nums.sort((m, n) => m - n)
  for (let i = nums.length; i >= 2; i--) {
      if (nums[i - 2] + nums[i - 1] > nums[i]) {
          return nums[i - 2] + nums[i - 1] + nums[i]
      }
  }
  return res
};
// @lc code=end

