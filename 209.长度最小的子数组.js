/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0, res = Infinity, sum = 0
  while (right < nums.length) {
    sum += nums[right]
    right++
    while(sum >= target) {
      const dis = right - left
      res = Math.min(res, dis)
      sum -= nums[left]
      left++
    }
  }
  return res === Infinity ? 0 : res
};


// @lc code=end

