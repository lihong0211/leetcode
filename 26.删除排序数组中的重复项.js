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
var removeDuplicates = function(nums) {
    let count = 0
    for(let i = 1; i < nums.length; i++ ) {
        if(nums[i] > nums[count]) {
            nums[count+1] = nums[i]
            count ++ 
        }
    }
    return count + 1
};
// removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// @lc code=end

