/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 贪心
  // 若当前指针所指之前的元素之和小于0
  // 则丢弃当前元素之前的数列
  let sum = nums[0]
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    sum = sum > 0 ? sum + nums[i] : nums[i]
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum
};


var maxSubArray = function(nums) {
  // 动态规划
  // 若前一个元素大于0
  // 则将其加到当前元素上
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] > 0 ? nums[i - 1] + nums[i] : nums[i]
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum
};

var maxSubArray = function(nums) {
  // 动态规划
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] > 0 ? nums[i - 1] + nums[i] : nums[i]
  }
  return Math.max(...nums)
};
// @lc code=end

