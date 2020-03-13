/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    if (!digits.length) return []
    if (digits.length === 1) return map[digits].split('')
    
    let r = []

    digits.split('').forEach(item => {
        r.push(map[item])
    })

    let comb = arr => {
        if (arr.length > 1) {
            let left = arr[0] instanceof Array ? arr[0] :  arr[0].split('')
            let right = arr[1].split('')
            let newItem = []
            for(let i = 0, len = left.length; i< len; i++) {
                for(let j = 0, len = right.length; j < len; j++) {
                    newItem.push(left[i] + right[j])
                }
            }
            arr.splice(0, 2, newItem)
            if (arr.length > 1) {
                comb(arr)
            }
        }
    }

    comb(r)
    return r[0]
    
};
// @lc code=end

