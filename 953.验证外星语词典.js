/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const hash = {}
  for (let i = 0; i < 26;  i++) {
    hash[order[i]] = i
  }
};
// @lc code=end

