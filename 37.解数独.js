/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const solveSudoku = board => {
    for (let i = 0; i < 9; i++ ) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') continue
            // 放一个数字试试
            for (let k = 1; k <=9; k++) {
                // 能放
                if (isValid(board, i, j, k.toString())) {
                    board[i][j] = k.toString()
                    if (solveSudoku(board)) return true
                    board[i][j] = '.'
                }
            }
            return false
        }
    }
    return true
}


function isValid (board, row, col, k) {
    const x = Math.floor(row / 3) * 3
    const y = Math.floor(col / 3) * 3
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === k || board[i][col] === k) return false
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[x + i][y + j] === k) return false
        }
    }
    return true
}

// @lc code=end

