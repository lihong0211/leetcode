/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [] // 从后往前看  维护一个单调栈
  const ret = []
  const hash = {}
  for (let i = nums2.length - 1; i >=0; i --) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop()
    }
    hash[nums2[i]] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums2[i])
  }
  for (let i = 0; i < nums1.length; i++) {
    ret.push(hash[nums1[i]])
  }
  return ret
};
// @lc code=end

