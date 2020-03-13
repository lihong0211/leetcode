/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // 有点搓哟。。。
    // let arr = x.toString().split('')
    // let len = arr.length
    // if (len % 2) {
    //     return arr.slice(0, (len - 1) / 2).join('') === arr.slice((len + 1) / 2).reverse().join('')
    // } else {
    //     return arr.slice(0, len / 2).join('') === arr.slice(len / 2).reverse().join('')
    // }

    // 优雅
    let reverseNum = String(x).split('').reverse().join('')
    return x == reverseNum
};
// @lc code=end

