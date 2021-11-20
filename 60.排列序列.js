/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 let stop = false
 let target = ''
var getPermutation = function(n, k) {
  stop = false
  target = ''
  const used = Array(n).fill(false)
  const ret = []
  backTrack(n, [], ret, k, used)
  return target
};

function backTrack (n, path, ret, k, used) {
  if (path.length === n) {
    ret.push(path.join(''))
    if (ret.length === k) {
      stop = true
      target = ret[k - 1]
    } 
  }
  for (let i = 1; i < n + 1; i++) {
    if (stop) continue
    if (!used[i]) {
      path.push(i)
      used[i] = true
      backTrack(n, path, ret, k, used)
      path.pop()
      used[i] = false
    }
    
  }
}
// @lc code=end

