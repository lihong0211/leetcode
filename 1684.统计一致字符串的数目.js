/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const hash = {}
  for (let i = 0; i < allowed.length; i++) {
    hash[allowed[i]] = true
  }
  let res = 0
  for (let i = 0; i < words.length; i++) {
    let flag = true
    for (let j = 0; j < words[i].length; j++) {
      if (!(words[i][j] in hash)) {
        flag = false
      }
    }
    res += flag ? 1 : 0
  }
  return res
};
// @lc code=end

