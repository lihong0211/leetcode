/*
 * @lc app=leetcode.cn id=381 lang=javascript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start

var RandomizedCollection = function() {
  this.hash = {}
  this.nums = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  if (this.hash[val] !== undefined) return false
  this.nums.push(val)
  this.hash[val] = this.nums.length - 1
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  const idx = this.hash[val]
  if (idx === undefined) return false
  if (this.nums[this.nums.length - 1] === val) {
    this.nums.pop()
  } else {
    this.nums[idx] = this.nums[this.nums.length - 1]
    this.hash[this.nums.pop()] = idx
  }
  this.hash[val] = undefined
  return true
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  const idx = Math.floor(Math.random() * this.nums.length)
  return this.nums[idx]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

