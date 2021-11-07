/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0, col = matrix[0].length - 1
    while(col >= 0 && row <= matrix.length - 1) {
      if (target < matrix[row][col]) {
        col --
      } else if (target > matrix[row][col]) {
        row ++
      } else {
        return true
      }
    }
    return false
};
// @lc code=end

