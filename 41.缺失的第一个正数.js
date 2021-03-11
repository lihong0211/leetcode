/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// const firstMissingPositive = nums => {
//     if (!nums.length || (nums.length === 1 && nums[0] !== 1)) return 1

//     // 中心思想是先采用冒泡排序  在判断排序后的两个元素的条件
//     // 分支逻辑是真尼玛多
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
//         if (nums[0] > 1) return 1
//         // 第二次选择排序， 不包括只有两个元素的情况
//         if ((i >= 1 && nums[i - 1] < 0 && nums[i] > 1)) {
//             return 1
//         }
        
//         if (i >= 1 && nums[i - 1] >= 0 && nums[i] - nums [i - 1] > 1) {
//             if (i === 1 && nums[0] > 1) {
//                 return 1
//             }
//             if (nums[i - 2] && nums[i - 2] < 1 && nums[i - 1] > 1) {
//                 return 1
//             }
//             return nums[i - 1] + 1
//         }

//     }
    
//     if (nums[0] > 1) return 1
//     if (nums[1] > 1 && nums[0] < 1) return 1
//     return nums[nums.length - 1] > 0 ?  nums[nums.length - 1] + 1 : 1
// };

const firstMissingPositive = nums => {
    if (!nums.length) return 1
    const set = new Set([...nums])
    let ret = 1
    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) {
            return i
        }
        ret = i
    }
    return ret + 1
}

// @lc code=end

