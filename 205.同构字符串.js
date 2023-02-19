/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const s2t = {}, t2s = {}
  for (let i = 0; i < s.length; i++) {
    const X = s[i], Y = t[i]
    if ((s2t[X] && s2t[X] !== Y) || (t2s[Y] && t2s[Y] !== X)) {
      return false
    }
    s2t[X] = Y
    t2s[Y] = X
  }
  return true
};
// @lc code=end

