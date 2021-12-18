/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  nums.sort((m, n) => m - n)
  const len = nums.length
  let min = Infinity
  for (let i = 0; i < len; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue

      let left = i + 1
      let right = len - 1

      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right]
          if (sum === target) {
              return target
          }
          min = Math.abs(sum - target) > Math.abs(min - target) ? min : sum
          if (sum < target) {
            while(left < right && nums[left] === nums[left + 1]) left++
            left++
          } else {
            while(left < right && nums[right] === nums[right - 1]) right--
            right--
          }
      }
  }
  return min
};
// @lc code=end

