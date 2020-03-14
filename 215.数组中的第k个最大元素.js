/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 冒泡  关键是两两比较，大的靠后
    for(let i = nums.length, temp;  i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // 冒泡到最后的位置去
            if (nums[i] < nums[j]) {
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    // nums.sort((m, n) => m - n)
    return nums[nums.length -k]
};

// @lc code=end

