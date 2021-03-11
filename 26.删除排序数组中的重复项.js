/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = nums => {
//     let count = 0
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[count]) {
//             nums[count + 1] = nums[i]
//             count++
//         }
//     }
//     return count + 1
// }

const removeDuplicates = nums => {
    let slow = 0
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] > nums[slow]) {
            nums[slow + 1] = nums[fast]
            slow++
        }
    }
    return slow + 1
}
// @lc code=end

