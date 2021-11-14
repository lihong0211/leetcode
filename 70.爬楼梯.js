/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = n => {
//     let cache = []
//     for (let i = 0; i <= n; i++) {
//         if (i <= 2) {
//             cache[i] = i
//         } else {
//             cache[i] = cache[i-1] + cache[i-2]
//         }
//     }
//     return cache[n]
// };

var climbStairs = n => {
    const dp  = new Array(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i -2]
    }
    return dp[n]
}
// @lc code=end

