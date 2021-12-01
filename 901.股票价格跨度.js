/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function() {
  this.stack = [] // 价格 单调递减
  this.width = [] // 价格对应的跨度
};

/** 
 * @param {number} price
 * @return {number}
 */
 StockSpanner.prototype.next = function(price) {
  let w = 1
  while (this.stack.length && this.stack[this.stack.length - 1] <= price) {
    this.stack.pop()
    w += this.width.pop()
  }
  this.stack.push(price)
  this.width.push(w)
  return w
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

