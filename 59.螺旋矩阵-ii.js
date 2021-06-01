/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = []
        round = 0, // 循环圈数
        index = 1, // 索引
        dir = 1 // 方向

    // 分为右下左上四个阶段，每完成4个阶段后 round+1。下一层循环的个数减2
    const traverse = (row = 0, col = 0) =>  {
        // 中心只有一个位置未填写
        if(n - round * 2 === 1) {
            arr[row][col] = index 
            return 
        } 
        for(let j = 0; j< 4; j++) {
            for(let i = 0; i < n - round * 2 - 1; i++) {
                arr[row][col] = index
                index++
                switch(dir%4) {
                    case 1: col++; break; // right
                    case 2: row++; break; // down
                    case 3: col--; break; // left
                    case 0: row--; break; // up
                }
            }
            dir++
        }
        round++
        if(!arr[row + 1][col + 1]) traverse(row + 1, col + 1)
    }

    for(let i = 0; i < n; i++) {
        arr[i] = []
    }

    traverse()
    return arr
    
};

// @lc code=end

