/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const hash = {}, len = nums.length

  let max = 0
  for (let i = 0; i < len; i++) {
    hash[nums[i]] = {
      count: hash[nums[i]] ? hash[nums[i]].count + 1 : 1,
      start: hash[nums[i]] ? hash[nums[i]].start : i,
      end: i
    }
    if (hash[nums[i]].count > max) {
      max = hash[nums[i]].count
    }
  }
  let min = Infinity
  for (let k in hash) {
    if (hash[k].count === max) {
      if (hash[k].end - hash[k].start + 1 < min) {
        min = hash[k].end - hash[k].start + 1
      }
    }
  }
  return min
};

// @lc code=end

