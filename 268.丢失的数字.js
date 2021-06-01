/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((m, n) => m - n)
    const n = nums.length
    for (let i = 0; i < n; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
    return nums[n - 1] + 1
};
// @lc code=end

