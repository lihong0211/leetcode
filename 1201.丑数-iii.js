/*
 * @lc app=leetcode.cn id=1201 lang=javascript
 *
 * [1201] 丑数 III
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// var nthUglyNumber = function(n, a, b, c) {
//   return nthSuperUglyNumber(n, [a, b, c])
// };
// var nthSuperUglyNumber = function(n, primes) {
//   const dp = [0, 1]
//   const p = new Array(primes.length).fill(1)
//   for (i = 2; i <= n + 2; i++) {
//     const min = Math.min(...[].slice.call(p).map((item, idx) => dp[item] * primes[idx]))
//     console.log(min)
//     for (let i = 0, l = p.length; i < l; i++) {
//       if (dp[p[i]] * primes[i] === min) p[i]++
//     }
//     dp[i] = min
//   }
//   console.log(dp)
//   return dp[n + 1]
// };

var nthUglyNumber = function(n, a, b, c) {
  const isUgly = num => {
    return num / a === Math.floor(num / a) || num / b === Math.floor(num / b) || num / c === Math.floor(num / c)
  }
  let count = 1
  let idx = 1
  // let arr = []
  while(count <= n) {
    idx++
    if (isUgly(idx)) {
      count++
      // arr.push(idx)
    }
  }
  // console.log(arr, count)
  return idx
};
// @lc code=end

