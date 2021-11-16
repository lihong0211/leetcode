/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ret = []
  candidates = candidates.sort((m, n) => m -n)
  backTrack(candidates, target, [], ret, 0)
  return ret
};

function backTrack (nums, remain, path, ret, start) {
  if (!remain) ret.push(path)
  if (start > nums.length - 1) return
  for (let i = start; i < nums.length; i++) {
    if (nums[i] > remain) return // 这里减枝
    path.push(nums[i])
    backTrack(nums, remain - nums[i], [...path], ret, i + 1)
    path.pop()
    while(nums[i + 1] === nums[i]) {
      i++
    }
  }
}
// @lc code=end

