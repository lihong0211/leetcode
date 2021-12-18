/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let len = columnTitle.length
  let res = 0
  for (let i = 0; i < len; i++) {
    res += (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1) * Math.pow(26, len - i - 1)
  }
  return res
};

var titleToNumber = function(columnTitle) {
  let len = columnTitle.length
  let base = 1
  let res = 0
  for (let i = len - 1; i >= 0; i--) {
    res += (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1) * base
    base *= 26
  }
  return res
};
// @lc code=end

