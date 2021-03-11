/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力算法
// const maxArea = height => {
//     let max = 0
//     for (let i = 0; i < height.length; i++) {
//         for (let j = 0; j < height.length; j++) {
//             const area = Math.min(height[i], height[j]) * Math.abs(i - j)
//             if (area > max) {
//                 max = area
//             }
//         }
//     }
//     return max
// }
// 左右双指针

const maxArea = height => {
    let max = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        if (area > max) {
            max = area
        }
        if (height[left] >= height[right]) {
            right--
        } else {
            left++
        }
    }
    return max
}
// @lc code=end

