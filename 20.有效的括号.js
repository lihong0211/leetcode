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
// var isValid = function(s) {
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     }
//     let stack = []
//     for(let i = 0; i < s.length; i++) {
//         if (s[i] in map) {
//             stack.push(s[i])
//         } else if (s[i] !== map[stack.pop()]) {
//            return false
//         }
//     }
//      return !stack.length
// };

const isValid = str => {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] in map) {
            stack.push(str[i])
        } else if (str[i] !== map[stack.pop()]) {
            return false
            
        }
    }

    return !stack.length
}
// @lc code=end

