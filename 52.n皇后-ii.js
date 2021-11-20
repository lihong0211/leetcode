/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let count = 0
var totalNQueens = function(n) {
  const init = Array(n).fill('.')
  const board = []   
  for (let i = 0; i < n; i++) {
      board.push([...init])
  }
  count = 0
  backTrack(board, 0)
  return count
};

function backTrack(board, row) {
  if (row === board.length) {
      return count++
  }
  const height = board[row].length
  for (let i = 0; i < height; i++) {
      if (!isValid(board, row, i)) continue
      board[row][i] = 'Q'
      backTrack(board, row + 1)
      board[row][i] = '.'
  }
}

function isValid(board, row, col) {
  const width = board[0].length
  const height = board.length
  // 当前列
  for (let i = 0; i < height; i++) {
      if (board[i][col] === 'Q') return false
  }
  // 右上
  for (let i = row - 1, j = col + 1; i >= 0 && j < width; i--, j++) {
      if (board[i][j] === 'Q') return false
  }
  // 左上
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false
  }
  return true
}
// @lc code=end

