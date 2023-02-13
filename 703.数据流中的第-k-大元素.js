/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.heap = new MinPriorityQueue({ 
    compare: (a, b) => a - b
  });
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i])
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.heap.enqueue(val)
  if (this.heap.size() > this.k) {
    this.heap.dequeue()
  }
  return this.heap.front()
};



/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

