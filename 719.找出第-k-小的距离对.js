/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 k 小的距离对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    let arr = []
    nums.forEach((item, index) => {
        for(let i = 0, il = nums.length; i< il; i++) {
            if (index === i) {
                return
            }
            const distance = Math.max(item, nums[i]) - Math.min(item, nums[i])
            arr.push(distance)
        }
    })
    arr.sort((m, n) => m - n)
    return arr[k - 1]
};
// @lc code=end

