/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  TODO: 选择排序、插入排序、冒泡排序、快速排序、归并排序

// var sortArray = function(nums) {
//     nums.sort((m, n) => m - n)
//     return nums
// };

// 冒泡  关键是两两比较，大的靠后
// const sortArray = nums => {
//     for(let i = nums.length, temp; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             // 冒泡到最后的位置去
//             if (nums[i] < nums[j]) {
//                 temp = nums[i]
//                 nums[i] = nums[j]
//                 nums[j] = temp
//             }
//         }
//     }
//     return nums
// };

// 冒泡
// const sortArray = nums => {
//     let temp
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length - i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 temp = nums[j + 1]
//                 nums[j + 1] = nums[j]
//                 nums[j] = temp
//             }
//         }
//     }
//     return nums
// }

// 选择排序  关键是两两比较，小的提到最前
// const sortArray = nums => {
//     for (let i = 0; i < nums.length; i++) {
//         let min = nums[i]
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < min) {
//                 let temp = nums[i]
//                 min = nums[j]
//                 nums[i] = nums[j] 
//                 nums[j] = temp
//             }
//         }
//     }
//     return nums
// };

// 快速排序
// const sortArray = nums => {
//     const len = nums.length
//     const left = []
//     const right = []
//     const flag = nums[0]
//     for (let i = 0; i < len; i++) {
//         if (nums[i] > flag) {
//             right.push(nums[i])
//         } else {
//             left.push(nums[i])
//         }
//     }
//     return sortArray(left).concat(flag, sortArray(right))
// }


// @lc code=end

