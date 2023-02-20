/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hash) return true
    hash[arr[i] * 2] = 1
    if (!(arr[i] % 2)) {
      hash[arr[i] / 2] = 1
    }
  }
  return false
};
// @lc code=end

