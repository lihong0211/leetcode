/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // return parseInt(x.toString().split('').reverse().join(''))
    let r 
    const arr = x.toString().split('')
    if (arr[0] === '-') {
        r = '-' + arr.slice(1).reverse().join('')
    } else {
        r = arr.reverse().join('')
    }
    if (parseInt(r) > Math.pow(2, 31) || parseInt(r) < - Math.pow(2, 31)) return 0
    return parseInt(r)
};
// @lc code=end

