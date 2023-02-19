/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let res = [], hash = {}
  for(let i in arr1) {
    hash[arr1[i]] = (hash[arr1[i]] || 0) + 1
  }
  for (let i in arr2) {
    res = res.concat(Array(hash[arr2[i]]).fill(arr2[i]))
    arr1 = arr1.filter(item => item !== arr2[i])
  }
  return res.concat(arr1.sort((m, n) => m - n))
};
// @lc code=end

