/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */

const minimumTotal = triangle => {
    const len = triangle.length - 1
    const temp = triangle[len]

    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            temp[j] = triangle[i][j] + Math.min(temp[j], temp[j + 1])
        }
    }
    return temp[0]
}


// @lc code=end

