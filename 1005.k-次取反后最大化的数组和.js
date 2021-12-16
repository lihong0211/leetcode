/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((m, n) => m - n)
  for(let i = 0; i < k; i++) {
    nums[0] = -nums[0]
    bubble(nums)
  }
  return total(nums)
};

function bubble (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[0]) {
      const temp = nums[i]
      nums[i] = nums[0]
      nums[0] = temp
      break
    }
  }
}

function total(nums) {
  return nums.reduce((res, cur) => {
    return res + cur
  }, 0)
}
// @lc code=end

