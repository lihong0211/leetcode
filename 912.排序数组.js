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
// var sortArray = function(nums) {
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
// 选择排序  关键是两两比较，小的提到最前
var sortArray = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < min) {
                let temp = nums[i]
                min = nums[j]
                nums[i] = nums[j] 
                nums[j] = temp
            }
        }
    }
    return nums
};
// @lc code=end

