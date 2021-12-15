/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices, k = 2) {
  const profit = Array(k)
  for (i = 0; i <= k; i++) {
    profit[i] = {
      buy: -prices[0],
      sell: 0
    }
  }
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
        sell: Math.max(profit[j].sell, profit[j].buy + prices[i])
      }
    }
  }
  return profit[k].sell
};
// @lc code=end

