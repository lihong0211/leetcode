/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 使用中心扩散
 var longestPalindrome = function(s) {
  if (s.length < 2) return s
  let maxLen = 1
  let start = 0
  for (let i = 0; i < s.length - 1; i++) {
    const oddLen = expandAroundCenter(s, i, i) // 奇数回文串中心
    const evenLen = expandAroundCenter(s, i, i + 1)  // 偶数回文串中心
    const curMaxLen = Math.max(oddLen, evenLen)
    if (curMaxLen > maxLen) {
      maxLen = curMaxLen
      start = i - Math.floor((maxLen - 1) / 2)
    }
  }
  return s.substr(start, maxLen)
};

function expandAroundCenter (s, left, right) {
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      left--
      right++
    } else {
      break
    }
  }
  return right - left - 1
}

// 使用动态规划
var longestPalindrome = function (s) {
  if (s.length < 2) return s
  let maxLen = 1
  let start = 0
  const len = s.length
  const dp = Array(len).fill(0).map(() => Array(len).fill(false))
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
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        start = i
      }
    }
  }
  return s.substr(start, maxLen)
}
// @lc code=end

