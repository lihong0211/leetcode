/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 乞丐版
    // 两层循环，时间复杂度O(n^2),空间复杂度O(1)
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = 0; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target && i !== j) {
    //             return [i, j]
    //         }
    //     }
    // }

    let obj = {}
    // 一层循环，时间复杂度O(n)，空间复杂度O(n),属于空间换时间
    for(let i = 0; i < nums.length; i++ ){
        let num = nums[i]
        if (num in obj) {
            return [obj[num], i]
        } else {
            obj[target-num] = i
        }
    }
};
// @lc code=end

