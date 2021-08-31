/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const dp = [0, 1]
  const p = new Array(primes.length).fill(1)
  for (i = 2; i <= n; i++) {
    const min = Math.min(...[].slice.call(p).map((item, idx) => dp[item] * primes[idx]))
    for (let i = 0, l = p.length; i < l; i++) {
      if (dp[p[i]] * primes[i] === min) p[i]++
    }
    dp[i] = min
  }
  return dp[n]
};

// @lc code=end

