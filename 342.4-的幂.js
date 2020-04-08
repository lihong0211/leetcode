/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  // n = 1 时 ==> 转4进制数为 1
  // n = 4 时 ==> 转4进制数为 10
  // n = 16 时 ==> 转4进制数为 100
  // n = 64 时 ==> 转4进制数为 1000
  return /^10*$/.test(num.toString(4))
};
// @lc code=end

