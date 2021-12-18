/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let res = 0
  let left = 0, right = x
  while (left <= right) {
      const mid = left + Math.floor((right - left) /  2)
      if (mid * mid <= x) {
          left = mid + 1
          res = mid
      } else {
          right = mid - 1
      }
  }
  return res
};
// @lc code=end

