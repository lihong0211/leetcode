/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let l = 0, r = nums.length - 1;
  while(l < r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
};
// @lc code=end

