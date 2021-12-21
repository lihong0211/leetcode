/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.nums = nums
  this.copy = [...nums]
};

/**
* @return {number[]}
*/
Solution.prototype.reset = function() {
  this.nums = [...this.copy]
  return this.nums
};

/**
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  const res = []
  const len = this.nums.length
  for (let i = 0; i < len; i++) {
      const idx = Math.floor(Math.random() * (len - i))
      res.push(this.nums.splice(idx, 1))
  }
  this.nums = [...this.copy]
  return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

