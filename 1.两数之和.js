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

// 双循环
const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
}
// 引用值
const twoSum = (nums, target) => {
    let obj = {}

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num in obj) {
            return [obj[num], i]
        } else {
            obj[target - num] = i
        }
    }
}
// @lc code=end

