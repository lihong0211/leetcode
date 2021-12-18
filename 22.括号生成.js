/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const res = []
  backTrack('', 0, 0, n, res)
  return res
};

function backTrack (path, left, right, n, res) {
  if (path.length === 2 * n) {
      res.push(path)
  }
  // 
  if (left < n) {
      path += '('
      backTrack(path, left + 1, right, n, res)
      path = path.slice(0, -1)
  }
  // 这里left > right条件是减枝
  if (left > right) {
      path += ')'
      backTrack(path, left, right + 1, n, res)
      path = path.slice(0, -1)
  }
}

// @lc code=end

