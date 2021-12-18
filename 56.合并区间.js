/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((m, n) => m[0] - n[0])
  const res = [intervals.shift()]
  
  while(intervals.length) {
    const left = res.pop()
    const right = intervals.shift()

    if (left[1] >= right[0] && left[1] <= right[1]) {
      res.push([left[0], right[1]])
    } else if (left[1] > right[1]) {
      res.push(left)
    } else {
      res.push(left, right)
    }
  }
  return res
};
// @lc code=end

