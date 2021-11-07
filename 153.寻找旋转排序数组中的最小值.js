/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0, r = nums.length - 1
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] < nums[r]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return nums[l]
};
// @lc code=end

