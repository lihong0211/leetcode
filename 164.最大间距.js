/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = nums => {
    if (nums.length === 1) return 0
    if (nums.length === 2) {
        return Math.abs(nums[0] - nums[1])
    }
    let max = 0
    for(let i = nums.length - 1, temp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // 冒泡到最后的位置去
            if (nums[i] < nums[j]) {
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
        // 第二轮冒泡的时候才开始判断最大差值
        if (i < nums.length - 1 && nums[i + 1] - nums[i] >= max) {
            max = nums[i + 1] - nums[i]
        }
    }
    return max
};
// @lc code=end

