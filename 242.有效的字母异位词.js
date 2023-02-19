/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const hash1 = {}, hash2 = {}
  for (let i = 0; i < s.length; i++) {
    hash1[s[i]] = (hash1[s[i]] || 0) + 1
  }
  for (let i = 0; i < t.length; i++) {
    hash2[t[i]] = (hash2[t[i]] || 0) + 1
  }
  for (let k in hash1) {
    if (hash2[k] !== hash1[k]) return false
  }
  return true
};
// @lc code=end

