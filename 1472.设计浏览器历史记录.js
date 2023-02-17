/**
 * @param {string} homepage
 */
// TODO: 用双向链表
var BrowserHistory = function(homepage) {
  this.history = [homepage]
  this.idx = 0
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  this.history = this.history.splice(0, this.idx + 1).concat(url)
  this.idx++
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  this.idx = Math.max(0, this.idx - steps)
  return this.history[this.idx]
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  this.idx = Math.min(this.idx + steps, this.history.length - 1)
  return this.history[this.idx]
};

/**
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/