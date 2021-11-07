/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let l = 0, r = matrix.length - 1
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2)
    if (matrix[mid][0] > target) {
      r = mid
    } else if (matrix[mid][matrix[mid].length - 1] < target) {
      l = mid + 1
    } else if (matrix[mid][matrix[mid].length - 1] >= target) {
      l = mid
      break
    }
  }
  let nl = 0, nr = matrix[l].length - 1
  if (matrix[l].length === 1) return matrix[l][0] === target
  while (nl <= nr) {
    const mid = Math.floor(nl + (nr - nl) / 2)
    if (matrix[l][mid] === target) {
      return true
    } else if (matrix[l][mid] < target) {
      nl = mid + 1
    } else {
      nr = mid - 1
    }
  }
  return false
};
// @lc code=end

