/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const ret = []
  backtrack(k, n, [], ret, 1)
  return ret
};

function backtrack (k, n, path, ret, start) {
  if (!k && !n) {
    return ret.push([...path])
  }
  for (let i = start; i <= 9; i++) {
    if (i > n) continue
    path.push(i)
    backtrack(k - 1, n - i, path, ret, i + 1)
    path.pop()
  }
}
// @lc code=end

