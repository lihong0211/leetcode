/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const hash1 = {}, hash2 = {}, res = []
  s1.split(' ').forEach(item => {
    hash1[item] = (hash1[item] || 0) + 1
  })
  s2.split(' ').forEach(item => {
    hash2[item] = (hash2[item] || 0) + 1
  })
  for(let k in hash1) {
    if (hash1[k] === 1 && !(k in hash2)) {
      res.push(k)
    }
  }
  for(let k in hash2) {
    if (hash2[k] === 1 && !(k in hash1)) {
      res.push(k)
    }
  }
  return res
};
// @lc code=end

