/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n < 2) return n
    if (n === 2) return 1
    if (n === 3) return 2
    let total = 0
    for (let i = 0; i < n; i++) {
        total += i
        if (total > n) {
            return i -1
        }
    }

};
// @lc code=end

