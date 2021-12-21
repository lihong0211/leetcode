/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  const len = s.length
  const dp = Array(len).fill(0).map(() => Array(len).fill(false))
  let count = len
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else if (j - i < 3) { // 中间最多只有一个元素
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i + 1][j - 1]
      }
      if (dp[i][j]) {
        count += 1
      }
    }
  }
  return count
};
// @lc code=end

