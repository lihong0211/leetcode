/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x === 1 || n === 0) return 1
  if (n < 0) return 1 / helper(x, Math.abs(n))
  return helper(x, n)
};

function helper (x, n) {
  if (n === 1) return x
  if (n % 2) {
    const res = helper(x, (n - 1) / 2)
    return res * res * x
  }
  if (n % 2 === 0) {
    const res = helper(x, n / 2)
    return res * res
  }
}
// @lc code=end

