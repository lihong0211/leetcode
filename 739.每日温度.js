/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const stack = []
  const ret = []
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop()
    }
    const val = stack.length ? stack[stack.length - 1] - i : 0
    stack.push(i)
    ret.unshift(val)
  }
  return ret
};
// @lc code=end

