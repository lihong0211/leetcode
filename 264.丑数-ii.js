/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// const isUgly = num => {
//   while (num % 2 === 0) num /= 2
//   while (num % 3 === 0) num /= 3
//   while (num % 5 === 0) num /= 5
//   return num === 1
// }
// // 可以这样做  但是时间复杂度太高  会超时
// var nthUglyNumber = function(n) {
//   let count = 0
//   let idx = 0
//   while (count < n) {
//     if (isUgly(idx)) count++
//   }
//   return idx
// };


var nthUglyNumber = function(n) {
  // 3个指针 当前丑数*2 *3 *5就会大于丑数数组最大的值
  let p1 = p2 = p3 = 1
  let dp = [0, 1]
  for (i = 2; i <= n; i++) {
    const M1 = dp[p1]*2, M2 = dp[p2]*3, M3 = dp[p3]*5
    dp[i] = Math.min(M1, M2, M3)
    if (dp[i] === M1) p1++
    if (dp[i] === M2) p2++
    if (dp[i] === M3) p3++
  }
  return dp[n]
};


// @lc code=end

