/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 20) {
      if (ten && !five || (!ten && five < 3)) return false
      if (ten) {
        ten--
        five--
      } else {
        five -= 3
      }
    } else if (bills[i] === 10) {
      if (!five) return false
      ten++
      five--
    } else {
      five++
    }
  }
  return true
};
// @lc code=end

