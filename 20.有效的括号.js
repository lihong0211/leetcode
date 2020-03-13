/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let r = []
    
    s.split('').forEach(item => {
        r.push(item)
        if (r[r.length - 1] === map[r[r.length - 2]]) {
            r = r.slice(0, r.length -2)
        }
    })
    return !r.length
};
// @lc code=end

