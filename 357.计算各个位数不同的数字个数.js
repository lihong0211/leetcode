/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let count
var countNumbersWithUniqueDigits = function(n) {
  if (!n) return 1
  count = 0
  const used = Array(10).fill(false)
  backtrack(n, 0, used)
  return n > 1 ? count + 1 : count
};

function backtrack (n, depth, used) {
  if (depth === n) {
    return count++
  }
  for (let i = 0; i <= 9; i++) {
    if (!used[i]) {
      used[i] = true
      backtrack(n, depth + 1, used)
      used[i] = false
    }
  }
}
// @lc code=end

