/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    // 没有超过安全数可以用这个方法
    // return String(Number(digits.join('')) + 1).split('')
    
    let plus = (digits, index) => {
        if (digits[index] === 9) {
            digits[index] = 0
            if (!index) {
                digits.unshift(1)
            } else {
                plus(digits, index - 1)
            }
            
        } else {
            digits[index] += 1
        }
    }

    plus(digits, digits.length - 1)

    return digits
};
// @lc code=end

