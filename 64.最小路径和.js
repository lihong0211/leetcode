/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length
  const col = grid[0].length
  const dp = []
  for(let i = 0; i < row; i++) {
    dp.push(grid[i])
  }
  dp[0][0] = grid[0][0]
  for(let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i-1] + grid[0][i]
  }
  for(let j = 1; j < row; j++) {
    dp[j][0] = dp[j-1][0] + grid[j][0]
  }
  for (let l = 1; l < row; l++) {
    for (let m = 1; m < col; m++) {
      dp[l][m] = Math.min(dp[l-1][m], dp[l][m-1]) + grid[l][m]
    }
  }
  return dp[row-1][col-1]
};
// @lc code=end

