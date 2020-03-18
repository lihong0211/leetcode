/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let arr = []
  nums1.forEach(item => {
    if (nums2.indexOf(item) !== -1 && arr.indexOf(item) === -1) {
      arr.push(item)
    }
  })
  return arr
};
// @lc code=end

