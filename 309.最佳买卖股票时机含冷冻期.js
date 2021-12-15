/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let buy = -prices[0]
  let sell = 0
  let profitFrozen = 0
  for (let i = 0; i < prices.length; i++) {
    const temp  = sell
    sell = Math.max(sell, buy + prices[i])
    buy = Math.max(buy, profitFrozen - prices[i])
    profitFrozen = temp
  }
  return sell
};
// @lc code=end

