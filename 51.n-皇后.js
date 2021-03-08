/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const list = []
    
    const isSafe = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                // 横竖
                if (board[row][j] === 'Q' || board[i][col] === 'Q') {
                    return false
                }
                // 斜线
                for (let k = 0; k < n; k++) {
                    if (board[row + k][j + k] && board[row + k][j + k] === 'Q') {
                        return false
                    } 
                    if (board[row - k][j -k] && board[row - k][j - k] === 'Q') {
                        return false
                    } 
                    if (board[row + k][j - k] && board[row + k][j - k] === 'Q') {
                        return false
                    }
                    if (board[row - k][j + k] && board[row - k][j + k] === 'Q') {
                        return false
                    }
                }
            }
        }
        return true
    }
    // 构建数据[['.', '.', '.', '.'], ['.', '.', '.', '.']]
    const init = new Array(n).fill('.')
    const board = new Array(n).fill(init)

    const setQueen = board => {
        let count = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (isSafe(board, i, j)) {
                    board[i][j] = 'Q'
                    count++
                    if (count === n) {
                        return list.push([board.map(item => item.join(''))])
                    }
                    if (setQueen(board)) return true
                    board[i][j] = '.'
                    count--
                }
            }
            return false
        }
    }

    setQueen(board)
    return list
};
// @lc code=end

