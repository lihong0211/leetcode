/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 这种方式不会删除完不存在的元素，nums的长度不会变化，
// 只能保证前start个的值满足不等于val的条件
// var removeElement = function(nums, val) {
//     let start = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[start] = nums[i];
//             start += 1;
//         }
//     }
//     console.log(nums)
//     return start;
// };

// 一直删除nums中第一个值为val对元素
var removeElement = function(nums, val) {
    while(nums.indexOf(val) != -1){
        nums.splice(nums.indexOf(val), 1);
    }
};


// @lc code=end

