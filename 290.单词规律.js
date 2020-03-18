/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let letters = pattern.split('')
  let words = str.split(' ')
  let map = {}
  for(let i = 0, len = letters.length; i < len; i++) {
    if (letters[i] in map) {
      return words[i] === map[letters[i]]
    } else {
      map[letters[i]] = words[i]
    }
  }
  return false
};
// @lc code=end

