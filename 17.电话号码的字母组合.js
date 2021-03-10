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
const letterCombinations = digits  => {
    if (!digits.length) return []
    if (digits.length === 1) return map[digits].split('')
    
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    const ret = []
    digits.split('').forEach(item => {
        ret.push(map[item])
    })

    const comb = arr => {
        const left = Array.isArray(arr[0]) ? arr[0] : arr[0].split('')
        const right = arr[1]
        const newItem = []
        // 合并数组的第一个项，并替换掉第一二项
        for (let i = 0; i < left.length; i ++) {
            for (let j = 0; j < right .length; j++) {
                newItem.push(left[i] + right[j])
            }
        }

        arr.splice(0, 2, newItem)
        // 递归执行所有项
        if (arr.length > 1) {
            comb(arr)
        }

    }

    comb(ret)
    return ret[0]
};
// @lc code=end

