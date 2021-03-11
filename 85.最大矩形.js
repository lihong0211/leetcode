/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let max = 0
    let reg = /1{1,}/g
    // 构建连续的1的起始位置的二维数组
    let arr = matrix.map(item => {
        let str = item.join('')
        let r = reg.exec(str)
        let res = []
        while (r) {
            res.push([r.index, r.index + r[0].length - 1])
            r = reg.exec(str)
        }
        return res
    })
    // 递归计算相邻的矩形
    let maximalRect = (arr, n = 1) => {
        let top = arr.pop()
        let next = arr.pop()
        if (!next || (next && !next.length)) {
            let maxWidth = 0
            for (let i = 0, il = top.length; i < il; i++) {
                if (top[i][1] - top[i][0] + 1 > maxWidth) {
                    maxWidth = top[i][1] - top[i][0] + 1
                    max = Math.max(max, maxWidth * n)
                }
            }
            return
        }
        let tt, nn, start, end, width = 1, newArr = [];
        n++
        for (let i = 0, il = top.length; i < il; i++) {
            tt = top[i]
            for (let j = 0, jl = next.length; j < jl; j++) {
                nn = next[j]
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]) + 1
                if (width >= 1) {
                    start = Math.max(tt[0], nn[0])
                    end = Math.min(tt[1], nn[1])
                    newArr.push([start, end])
                    max = Math.max(max, n * width)
                }
            }
            if (tt[1] - tt[0] + 1 > width) {
                max = Math.max(max, tt[1] - tt[0] + 1)
            }
        }
        arr.push(newArr)
        maximalRect(arr, n++)
    }
    // 横向
    while (arr.length) {
        maximalRect([].concat(arr))
        arr.pop()
    }
    return max >= 0 ? max : -1
};
// @lc code=end