/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    let max = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0 && !flowerbed[0] && !flowerbed[1]) {
            max++
            i++
        } else if (i === flowerbed.length - 1 && !flowerbed[i] && !flowerbed[i - 1]) {
            max++
        } else if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            max++
            i++
        }
    }
    return max >= n
};
// @lc code=end

