/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const hash = {}
  paragraph.replace(/[^a-zA-Z]/g, ' ').toLowerCase().split(' ').forEach(item => {
    hash[item] = (hash[item] || 0) + 1
  })
  let max = 0, maxWord = ''
  for (let k in hash) {
    if (k && !banned.includes(k) && hash[k] > max) {
      max = hash[k]
      maxWord = k
    }
  }
  return maxWord
};
// @lc code=end

