/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // 时间复杂度高
  // let cache = []
  // let has = false
  // for (let i = 0; i < nums.length; i++) {
  //   if (cache.indexOf(nums[i]) != -1) {
  //     return true
  //   } else {
  //     cache.push(nums[i])
  //   }
  // }
  // return has
  // 空间复杂度高
  return Array.from([...new Set(nums)]).length < nums.length

  // TODO: 冒泡排序或者选择排序  每完成一轮比较相邻两个元素大小
};
// @lc code=end

