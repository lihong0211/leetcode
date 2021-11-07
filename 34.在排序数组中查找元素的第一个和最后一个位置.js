/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const p = find(nums, 0, nums.length - 1, target)
  if (p === -1) return [-1, -1]
  let i = p, j = p
  while(nums[i] === nums[p]) {
    i--
  }
  while(nums[j] === nums[p]) {
    j++
  }
  return [i + 1, j - 1]
};

function find (nums, l, r, target) {
  if (l > r) return -1
  let mid = Math.floor(l + (r - l) / 2)
  if (nums[mid] < target) return find(nums, mid + 1, r, target)
  if (nums[mid] > target) return find(nums, l, mid - 1, target)
  return mid
}
// @lc code=end

