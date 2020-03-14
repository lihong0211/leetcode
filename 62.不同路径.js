/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//  暴力递归 这个逻辑其实是对对  只能超时。。。
var uniquePaths = function(m, n) {
    if (m == 0 || n == 0) {
        return 0
    }
    if ((m === 1 && n === 1)) {
        return 1
    }
     else {
        return uniquePaths(m -1, n) + uniquePaths(m, n - 1)
    }
};
// uniquePaths(51, 9)
// @lc code=end

