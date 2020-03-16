/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for( let i = 0, len = nums.length; i < len; i++) {
        if (!nums[i]) {
            nums.splice(i, 1)
            nums.push(0)
            len --
            i--
        }
    }
};
// @lc code=end

