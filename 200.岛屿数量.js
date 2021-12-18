/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  const row = grid.length
  const col = grid[0].length
  let res = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        res += 1
        change(grid, i, j)
      }
    }
  }
  return res
};

function change(grid, i, j) {
  if (i < 0 || i >= grid.length) return
  if (j < 0 || j >= grid[0].length) return
  if (grid[i][j] === '1') {
    grid[i][j] = '11'
    change(grid, i - 1, j)
    change(grid, i + 1, j)
    change(grid, i, j + 1)
    change(grid, i, j - 1)
  }
}
// @lc code=end

