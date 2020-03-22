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
  // hash 解决这个问题
  let letters = pattern.split('')
  let words = str.split(' ')
  //长度不等
  if (letters.length !== words.length) return false
  let map = {}
  let arr = []
  // 构建hash
  for(let i = 0, len = letters.length; i < len; i++) {
    if (letters[i] in map) {
      if (map[letters[i]] !== words[i]) return false
    } else  {
      if (arr.indexOf(words[i]) !== -1) return false
      map[letters[i]] = words[i]
      arr.push(words[i])
    }
  }
  return true
};
// wordPattern("abab", "dog dog dog dog")
// @lc code=end

