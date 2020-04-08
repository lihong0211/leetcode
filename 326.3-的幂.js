/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 * 
 */
var isPowerOfThree = function(n) {
  // n = 1 时 ==> 转3进制数为 1
  // n = 3 时 ==> 转3进制数为 10
  // n = 9 时 ==> 转3进制数为 100
  // n = 27 时 ==> 转3进制数为 1000
  return /^10*$/.test(n.toString(3))
};
// @lc code=end

