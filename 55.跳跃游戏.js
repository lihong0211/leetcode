/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心算法
var canJump = function(nums) {
  const len = nums.length
  let farthest = 0 // 维护一个能跳到的最远距离
  for (let i = 0; i < len - 1; i++) {
    if (i > farthest) return false
    farthest = Math.max(farthest, i + nums[i])
    if (farthest >= len - 1) return true
  }
  return farthest >= len - 1
};
// @lc code=end

