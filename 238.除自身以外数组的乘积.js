/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const leftArr = [nums[0]];
  const rightArr = [nums[len - 1]];
  for (let i = 1; i < len; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i];
  }
  for (let j = 1; j < len; j++) {
    rightArr[j] = rightArr[j - 1] * nums[len - j - 1];
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] =
      (leftArr[i - 1] === undefined ? 1 : leftArr[i - 1]) *
      (rightArr[len - i - 2] === undefined ? 1 : rightArr[len - i - 2]);
  }
  return res;
};
// @lc code=end
