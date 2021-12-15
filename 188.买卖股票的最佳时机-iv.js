/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const profit = Array(k)
  for (let i = 0; i <= k; i++) {
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

