/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // FIXME:使用了递归， 时间复杂度高。
  // let newNum = num.toString().split('').reduce((prev, cur) => prev + Number(cur), 0)
  // if (newNum > 9) {
  //   return  addDigits(newNum)
  // }
  //   return newNum


    // 1
    // 10
    // 19
    // 28
    // 37
    // 46
    // 55
    // 64
    // 73
    // 82
    // 91
    // 100
    // 规律就再这里， 取余
    if (num % 9 === 0 && num !== 0) {
        return 9
    }
    return num % 9
};
// @lc code=end

