/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  if (nums.length < 2) return nums.length
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }
  let res = 1
  for (const num of set) {
    if (!set.has(num - 1)) {
      let curNum = num
      let maxLen = 1
      while(set.has(curNum + 1)) {
        curNum += 1
        maxLen += 1
        res = Math.max(res, maxLen)
      }
    }
  }
  return res
};
// @lc code=end

