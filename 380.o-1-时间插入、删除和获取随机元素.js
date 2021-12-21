/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  this.hash = {}
  this.nums = []
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.hash[val] !== undefined) return false
  this.nums.push(val)
  this.hash[val] = this.nums.length - 1
  return true
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
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
RandomizedSet.prototype.getRandom = function() {
  const idx = Math.floor(Math.random() * this.nums.length)
  return this.nums[idx]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

