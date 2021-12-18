/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((m, n) => m - n)
  const res = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    if ((nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]) > target) break
    if ((nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3]) < target) continue

    for (let j = i + 1; j < len; j++) {
      if(j > i + 1 && nums[j] === nums[j - 1]) continue
      let left = j + 1
      let right = len - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while(left < right && nums[left] === nums[left + 1]) {
            left++
          }
          while(left < right && nums[right] === nums[right - 1]) {
            right --
          }
          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
};
// @lc code=end

