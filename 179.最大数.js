/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = nums => {
    nums = nums.sort((a, b) => {
        const s1 = `${a}${b}`
        const s2 = `${b}${a}`
        return s2 - s1
    })
    return nums[0] ? nums.join('') : '0'
};
// @lc code=end

