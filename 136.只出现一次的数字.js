/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 原始暴力
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) return nums[i];
  // }
  // 还可以用hash 或者先排序再暴力循环

  // TODO: 使用异或 超级牛逼
  // 遍历循环使用异或， 相同的项异或为0， 0异或只出现一次的项等于该项
  let temp
  for (let i = 0, len = nums.length; i < len; i++) {
    temp ^= nums[i]
  }
  return temp
};
// @lc code=end

