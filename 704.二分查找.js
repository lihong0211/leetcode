/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 循环实现
var search = function(nums, target) {
  // 在nums[l, r]中查找元素
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      return mid
    }
  }
  return -1
};

// 递归实现
var search = function(nums, target) {
  // 在nums[l, r]中查找元素
  return find(nums, 0,  nums.length - 1, target)
};

function find (nums, l, r, target) {
  if (l > r) return -1
  const mid = Math.floor(l + (r - l) / 2)
  if (nums[mid] === target) return mid
  if (nums[mid] < target) return find(nums, mid + 1, r, target)
  if (nums[mid] > target) return find(nums, l, mid - 1, target)
}
// @lc code=end

