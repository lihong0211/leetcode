/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const hash = {}
  for (let i = 0; i < text.length; i++) {
    hash[text[i]] = (hash[text[i]] || 0) + 1
  }
  
  return Math.min((hash["b"] || 0), (hash['a'] || 0), (hash['n'] || 0), Math.floor((hash['l'] || 0) / 2), Math.floor((hash['o'] || 0) / 2))
};
// @lc code=end

