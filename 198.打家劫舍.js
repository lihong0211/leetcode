/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const l = nums.length
  const dp = new Array(l + 1).fill(0)
  dp[1] = nums[0]
  dp[2] = Math.max(nums[0], nums[1])
  dp[3] = Math.max(nums[0] + nums[2], nums[1])
  for (let i = 4; i < nums.length + 1; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }
  return dp[l]
};
// @lc code=end

