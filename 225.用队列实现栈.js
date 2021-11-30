/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

// 使用两个队列
// var MyStack = function() {
//   this.queue1 = []
//   this.queue2 = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//   this.queue1.push(x)
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//   while(this.queue1.length > 1) {
//     this.queue2.push(this.queue1.shift())
//   }
//   const top = this.queue1.shift()
//   while(this.queue2.length) {
//     this.queue1.push(this.queue2.shift())
//   }
//   return top
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//   const len = this.queue1.length
//   return this.queue1[len - 1]
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//   return !this.queue1.length
// };

// 使用一个队列
var MyStack = function() {
  this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
  const len = this.queue.length
  for (let i = 0; i < len - 1; i++) {
    this.queue.push(this.queue.shift())
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

