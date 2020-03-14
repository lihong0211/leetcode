/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.filter(it => it === nums[i]).length > nums.length / 2) {
    //         return nums[i]
    //     }
    // }

    nums.sort()
    const len = nums.length
    console.log(nums)
    console.log(len)
    return len%2 ?  nums[(len-1)/2] : nums[len/2]
};
// @lc code=end

