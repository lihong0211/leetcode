/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return /^10*$/.test(n.toString(2))
};
// (2).toString(2)  10
// (3).toString(2)  11
// (4).toString(2)  100
// (5).toString(2)  101
// (6).toString(2)  110
// (7).toString(2)  111
// (8).toString(2)  1000
// @lc code=end

