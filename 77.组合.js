/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ret= []
  backTrack(n, k, [], ret, 1)
  return ret
};

function backTrack (n, target, path, ret, start) {
  if (path.length === target)  {
    return ret.push([...path])
  }
  for (let i = start; i < n + 1; i++) {
    path.push(i)
    backTrack(n, target, path, ret, i + 1)
    path.pop()
  }
}
// @lc code=end

