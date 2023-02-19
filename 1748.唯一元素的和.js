/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let res = 0
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
      if (!(nums[i] in hash)) {
          hash[nums[i]] = 1
          res += nums[i]
      } else if (hash[nums[i]]===1) {
          hash[nums[i]] += 1
          res -= nums[i]
      }
  }
  return res
};
// @lc code=end

