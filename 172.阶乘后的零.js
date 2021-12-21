/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function(n) {
//     // 这种方法正确但是超时
//     const dp = Array(n + 1).fill(BigInt(1))
//     for (let i = 1; i <= n; i++) {
//         dp[i] = BigInt(BigInt(dp[i - 1]) * BigInt(i))
//     }
//     const str = BigInt(dp[n]).toString()
//     let len = str.length
//     let res = 0
//     while(str[--len] === '0') {
//         res += 1
//     }
//     return res
// };

var trailingZeroes = function (n) {
  let res = 0
  for (let i = 5; i <= n; i += 5) {
    let pow = 5
    // 通过检查 i 是否可以被 5，25，125等整除。
    while (i % pow === 0) {
      res += 1
      pow *= 5
    }
  }
  return res
}

// @lc code=end

