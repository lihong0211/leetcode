/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = nums => {
    nums = nums.sort((m, n) => m - n)
    const list = []

    for (let i = 0; i < nums.length; i++) {
        // 去掉重复的  下面这行很重要
        let left = i + 1
        let right = nums.length - 1

        if (nums[i] === nums[i - 1]) continue
        while (left < right) {
            if (nums[left] + nums[right] + nums[i] === 0) {
                list.push([nums[left], nums[right], nums[i]])
                while(nums[left] === nums[left + 1]) {
                    left++
                }
                left++
                while(nums[right] === nums[right - 1]) {
                    right--
                }
                right--
            } else if (nums[left] + nums[right] + nums[i] > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return list
}

// @lc code=end

