/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  let left = 0, cnt = 0, product = 1
  for (let right = 0; right < nums.length; right++) {
      product *= nums[right]
      while(left < right && product >= k) {
          product /= nums[left]
          left++
      }
      if (product < k) cnt += right - left + 1
  }
  return cnt
};
// @lc code=end

