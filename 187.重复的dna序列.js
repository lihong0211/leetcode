/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
  const hash = {}
  const res = []
  for (let i = 0; i < s.length - 9; i++) { // slice前闭后开
      const str = s.slice(i, i + 10)
      if (hash[str] === undefined) {
          hash[str] = 1
      } else {
          if (hash[str] === 1) {
              res.push(str)
          }
          hash[str]++
      }
  }
  return res
};
// @lc code=end

