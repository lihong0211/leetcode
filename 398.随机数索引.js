/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.hash = {}
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] in this.hash) {
      this.hash[nums[i]].push(i)
    } else {
      this.hash[nums[i]] = [i]
    }
  }
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  const len = this.hash[target].length
  const idx = Math.floor(Math.random() * len)
  return this.hash[target][idx]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

