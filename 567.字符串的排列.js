/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  let left = 0, right = s1.length - 1
  while(right < s2.length) {
      if (isValid(s1, s2.substr(left, s1.length))) return true
      right++
      left++
  }
  return false
};

function isValid (s1, s2) {
  const hash1 = {}, hash2 = {}, len = s1.length
  for (let i = 0; i < len; i++) {
      hash1[s1[i]] = hash1[s1[i]] ? hash1[s1[i]] + 1 : 1
  }
  for (let i = 0; i < len; i++) {
      hash2[s2[i]] = hash2[s2[i]] ? hash2[s2[i]] + 1 : 1
  }
  for (let k in hash1) {
      if (hash1[k] !== hash2[k]) return false
  }
  return true
}
// @lc code=end

