/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  const hash = {}
  for (let i = 0; i < s.length; i++) {
      hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1
  }
  let res = 0
  for (let k in hash) {
      res += hash[k] % 2 ? hash[k] - 1 : hash[k]
  }
  return res < s.length ? ++res : res
};
// @lc code=end

