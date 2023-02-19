/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const hash = {}, hash1 = {}
  for (let i = 0; i < arr.length; i++) {
      hash[arr[i]] = (hash[arr[i]] || 0) + 1
  }
  for (let k in hash) {
      if (hash[k] in hash1) return false
      hash1[hash[k]] = k
  }
  return true
};
// @lc code=end

