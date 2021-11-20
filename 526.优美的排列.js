/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let count = 0
var countArrangement = function(n) {
  const used = Array(n).fill(false)
  count = 0
  backTrack(n, [], used)
  return count
};
function backTrack (n, path, used) {
  if (path.length === n) {
    return count++
  }
  for (let i = 1; i <= n; i++) {
    if (!isBeatiful(i, path.length + 1)) continue
    if (!used[i - 1]){
      path.push(i)
      used[i - 1] = true
      backTrack(n, path, used)
      used[i - 1] = false
      path.pop()
    }
  }
}
function isBeatiful (val, idx) {
  return parseInt(val / idx) === parseFloat(val / idx) ||
  parseInt(idx / val) === parseFloat(idx / val) 
}
// @lc code=end

