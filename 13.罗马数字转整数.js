/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const hash = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
    "IV" : 4,
    "IX" : 9,
    "XL" : 40,
    "XC" : 90,
    "CD" : 400,
    "CM" : 900
  }
  let res = 0
  const arr = ["IV", 'IX', 'XL', 'XC', 'CD', 'CM']
  while (s.length) {
    const s1 = s.slice(0, 2)
    if (arr.includes(s1)) {
      res += hash[s1]
      s = s.slice(2)
        
    } else {
      res += hash[s.slice(0, 1)]
      s = s.slice(1)
    }
  }
  return res
}
// @lc code=end
