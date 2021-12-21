/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const len = nums.length
  let maxLen = 1
  let res = 1
  const dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    // maxLen = Math.max(dp[i], maxLen)
    if (maxLen === dp[i]) {
      res += 1
    } else if (maxLen < dp[i]) {
      res = 1
      maxLen = dp[i]
    }
  }
  return res
};
// @lc code=end

