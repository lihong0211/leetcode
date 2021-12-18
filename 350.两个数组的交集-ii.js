/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  const res = []
  for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
          res.push(nums2.splice(nums2.findIndex(item => item === nums1[i]), 1))
      }
  }
  return res
};

// hash
var intersect = function(nums1, nums2) {
  const res = []
  const len1 = nums1.length
  const len2 = nums2.length
  const hash = {}
  for (let i = 0; i < len1; i++) {
    hash[nums1[i]] = hash[nums1[i]] ? 1 : hash[nums1] + 1
  }
  for (let i = 0; i < len2; i++) {
    if(hash[nums2[i]]) {
      res.push(nums2[i])
      hash[nums2[i]] -= 1
    }
  }
  return res
};
// @lc code=end

