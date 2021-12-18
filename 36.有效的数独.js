/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue
      // 替换当前值
      const temp = board[i][j]
      board[i][j] = '.'
      if (!isValid(board, i, j, temp)) return false
      board[i][j] = temp
    }
  }
  return true
};

function isValid (board, row, col, k) {
  const x = Math.floor(row / 3) * 3
  const y = Math.floor(col / 3) * 3
  // 9x9
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === k || board[i][col] === k) return false
  }
  // 3x3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) return false
    }
  }
  return true
}
// @lc code=end

