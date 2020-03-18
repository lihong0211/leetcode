/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
//   特判0；

// 分别把num对于2， 3， 5的因数全部约掉。
// 看看num最后是不是只剩下1
    if (!num) return false
    while (num % 2 === 0) num /=   2
    while (num % 3 === 0) num /=   3
    while (num % 5 === 0) num /=   5
    return num === 1
};
// @lc code=end

