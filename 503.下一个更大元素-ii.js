/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = [] // 从后往前看  维护一个单调栈
  const ret = []
  const len = nums.length
  // 数组翻倍 索引取余
  for (let i = 2 * len - 1; i >= 0; i--) {
    while(stack.length && stack[stack.length - 1] <= nums[i % len]) {
      stack.pop()
    }
    const val = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums[i % len])
    ret[i % len] = val
  }
  return ret
};
// @lc code=end

