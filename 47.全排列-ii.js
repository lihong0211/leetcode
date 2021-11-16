/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort((m, n) => m - n)
  const ret = []
  const used = Array(nums.length).fill(false)
  backTrack(nums, [], ret, used)
  return ret
};
function backTrack (nums, path, ret, used) {
  if (path.length === nums.length) {
    ret.push([...path])
  }
  for (let i = 0; i < nums.length; i++) {
    // TODO: 去重这里好好理解
    if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) continue
    if (!used[i]) {
      path.push(nums[i])
      used[i] = true
      backTrack(nums, path, ret, used)
      path.pop()
      used[i] = false
    }
  }
}
// @lc code=end

