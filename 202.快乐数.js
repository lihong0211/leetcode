/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//   let num = n
//   const set = new Set()
//   while(true) {
//       const str = num.toString()
//       let newNum = 0
//       for (let i = 0; i < str.length; i++) {
//           newNum += Number(str[i]) ** 2
//       }
//       if (newNum === 1) return true
//       if (set.has(newNum)) return false
//       set.add(newNum)
//       num = newNum
//   }
// };

var isHappy = function (n) {
    let slow = n
    let fast = next(n)
    while (slow !== fast) {
        slow = next(slow)
        fast = next(next(fast))
    }
    return slow === 1
}

function next(num) {
    const str = num.toString()
    let newNum = 0
    for (let i = 0; i < str.length; i++) {
        newNum += Number(str[i]) ** 2
    }
    return newNum
}
// @lc code=end

