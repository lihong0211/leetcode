/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 第一个元素比target大
    if (nums[0] > target) return 0
    // 只有一个元素
    if (nums.length === 1) return nums[0] >= target ? 0 : 1
    
    for(let i = 0, len = nums.length; i < len - 1; i ++) {
        if (nums[i] === target) {
            return i
        } else if (nums[i] < target && nums[i + 1] >= target) {
            return i + 1
        }
    }
    // 最后一个元素比target小
    return nums.length
};
// @lc code=end

