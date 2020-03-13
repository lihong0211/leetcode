/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (!strs.length) return ''

    let commonPrefix = ''
    let start = strs[0]
    let arr = strs.slice(1)

    if (!arr.length) return start

    for(let i = 1, len = start.length; i < len + 1; i++) {
        if (arr.some(item => !item.startsWith(start.substring(0,i)) || item.length < i)) {
            return commonPrefix
        } else {
            commonPrefix = start.substring(0,i)
        }
       
    }
    return commonPrefix
};
// @lc code=end

