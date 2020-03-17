/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // nums.sort((m, n) => m - n)
  // for(let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== i) return i
  // }
  // return nums.length

  // 使用选择排序    FIXME:速度慢的一匹
  let min
  for(let i = 0; i < nums.length; i++) {
    min=nums[i]
    for(let j = i + 1, temp; j < nums.length; j ++) {
      if(nums[j] < min) {
        temp = nums[j]
        min = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
    if (nums[i] !== i) {
      return i
    }
  }
  return nums.length
};
// @lc code=end

