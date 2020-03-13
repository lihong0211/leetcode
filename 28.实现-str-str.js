/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // TODO: 该方法还未成功
    // if (!needle.length) return 0
    // let reg = new RegExp(`[^(${needle})]*(?=${needle})`)
    // // reg.exec(haystack)
    // debugger
    // return reg.exec(haystack) ? reg.exec(haystack)[0].length : -1
    return haystack.indexOf(needle)
};
strStr('mississippi', 'issip')
// @lc code=end

