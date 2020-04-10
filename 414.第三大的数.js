/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const arr = Array.from(new Set([...nums.sort((m, n) => m - n)]))
  return arr.length >= 3 ? arr[arr.length - 3] : arr.pop()
}
// @lc code=end

