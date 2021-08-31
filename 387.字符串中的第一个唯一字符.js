/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let cache = {}
  for (let i = 0, l = s.length; i < l; i++) {
    if (!cache[s[i]]) {
      cache[s[i]] = 1
    } else {
      cache[s[i]]++
    }
  }
  for (let i = 0, l = s.length; i < l; i++) {
    if (cache[s[i]] === 1) {
      return i
    }
  }
  return -1
};
// @lc code=end

