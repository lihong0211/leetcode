/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const hash = {}
  for(let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return nums[i]
    hash[nums[i]] = true
  }
};
// @lc code=end

