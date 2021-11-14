/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ret = 0
  for(let i = 0; i < prices.length; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > ret) {
        ret = prices[j] - prices[i]
      }
    }
  }
  return ret
}

var maxProfit = function(prices) {
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max
}
// @lc code=end

