/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const hash = {}, res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      res.push(nums[i])
    } else {
      hash[nums[i]] = 1
    }
  }
  return res
};
// @lc code=end

