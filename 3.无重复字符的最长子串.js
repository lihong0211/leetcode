/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0
    const arr = [] // 滑动窗口
    for (let i = 0; i < s.length; i++) {
        const index = arr.indexOf(s[i])
        if (index !== -1) {
            arr.splice(0, index + 1)
        }
        arr.push(s[i])
        max = Math.max(max, arr.length)
    }
    return max
};

// @lc code=end

