/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = (board, word) => {
    // 特殊条件处理
    if (board.length === 0) return false
    if (word.length === 0) return true

    const find = (i, j, idx) => {
        // 越界
        if (i >= row || i < 0) return false
        if (j >= col || j < 0) return false

        const letter = board[i][j]
        // 不匹配
        if (letter !== word[idx]) return false
        if (letter === 'S') {
            debugger
        }
        // 已经找到最后一个
        if (idx === word.length - 1) return true
        // 防止回找
        board[i][j] = null
        const ret = find(i - 1, j, idx + 1) ||
                    find(i + 1, j, idx + 1) || 
                    find(i, j + 1, idx + 1) ||
                    find(i, j - 1, idx + 1)
        board[i][j] = letter
        return ret
    }
    
    const row = board.length
    const col = board[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const ret = find(i, j, 0)
            if (ret) return true
        }
    }
    
    return false
}

// @lc code=end

