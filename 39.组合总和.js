/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const ret = []
  candidates = candidates.sort((m, n) => m - n)
  backtrack(candidates, target, [], 0, ret)
  return ret
};

function backtrack(nums, remain, path, start, ret) {
  if (remain === 0) {
    ret.push(path)
    return
  }
  for (let i = start; i < nums.length; i++) {
    if (nums[i] > remain) {
      return
    } 
    if (i > 0 && nums[i] === nums[i - 1]) continue
    path.push(nums[i])
    backtrack([...nums], remain - nums[i], [...path], i, ret)
    path.pop()
  }
}

// @lc code=end

