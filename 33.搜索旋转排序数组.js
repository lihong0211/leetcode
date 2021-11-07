/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return find(nums, 0, nums.length - 1, target)
};

function find(nums, l, r, target) {
  if (l > r) return -1
  let mid = Math.floor(l + (r - l) / 2)
  if (nums[mid] === target) return mid
  // 这里向下取整  所以要用<=
  else if (nums[l] <= nums[mid]) { // 左边有序
    if (nums[l] <= target && nums[mid] > target) {
      return find(nums, l, mid - 1, target)
    } else {
      return find(nums, mid + 1, r, target)
    }
  } else { // 右边有序
    if (nums[mid] < target && target <=nums[r]) {
      return find(nums, mid + 1, r, target)
    } else {
      return find(nums, l, mid - 1, target)
    }
  }
}
// @lc code=end

