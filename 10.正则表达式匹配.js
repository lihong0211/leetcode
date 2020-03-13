/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 边界情况，如果 s 和 p 都为空，说明处理结束了，返回true，否则返回false 
    if (p.length <=0) {
        return !s.length
    }
    // 判断 p 模式字符串都第一个字符和 s 字符串都第一个字符是不是匹配
    let match = false

    if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
        match = true
    }
    // p 有模式的
    if (p.length > 1 && p[1] === '*' ) {
        // 第一种情况--匹配0个字符，砍掉p的前2位继续验证
        // 第二种情况--匹配一个字符，砍掉s的第一位继续验证
        // 这两种情况有一种返回true，说明匹配成功
        return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    } else {
        return match && isMatch(s.slice(1), p.slice(1))
    }
};
// @lc code=end

