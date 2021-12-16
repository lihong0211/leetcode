/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((m, n) => m - n)
  s = s.sort((m, n) => m - n)
  let res = 0
  for (let i = 0; i < g.length; i++) {
      while(g[i] > s[0]) {
          s.shift()
      }
      if (s.length) {
          res++
          s.shift()
      }
  }
  return res
}
// @lc code=end

