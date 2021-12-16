/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
  let res = []
  let min = 0, max = s.length
  for (let i = 0; i < s.length + 1; i ++) {
      if (s[i] === 'I') {
          res.push(min)
          min++
      } else {
          res.push(max)
          max--
      }
  }
  return res
};
// @lc code=end

