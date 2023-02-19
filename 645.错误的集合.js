/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const hash = {}
  let repeat = miss = 0

  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] in hash) {
      repeat = nums[i]
    } else {
      hash[nums[i]] = 1
    }
  }
  for (i = 1; i < nums.length + 1; i++) {
    if (!(i in hash)) miss = i
  }
  return [repeat, miss]
};
// @lc code=end

