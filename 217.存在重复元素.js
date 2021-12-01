/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   return Array.from([...new Set(nums)]).length < nums.length
// };

var containsDuplicate = function (nums) {
  let hash = {}
  for(let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = nums[i]
    } else {
      return true
    }
  }
  return false
}
// @lc code=end

