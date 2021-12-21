/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  const len = gas.length
  let minSpare = Infinity
  let spare = 0
  let start = 0
  for (let i = 0; i < gas.length; i++) {
      spare += (gas[i] - cost[i])
      if (spare < minSpare) {
          minSpare = spare
          start = i
      }
  }
  // 总剩余量大于0能跑完全程
  // 在最低剩余量下一个站开始能跑完全程
  return spare < 0 ? -1 : (start + 1) % len
};
// @lc code=end

