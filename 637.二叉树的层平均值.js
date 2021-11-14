/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const ret = []
  let levelRet = []
  const queue = []
  queue.push(root)
  while(queue.length) {
    levelRet = []
    const l = queue.length
    for (let i = 0; i < l; i ++) {
      const cur = queue.shift()
      levelRet.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    ret.push(average(levelRet))
  }
  return ret
};

function average (nums) {
  return nums.reduce((total, cur) => {
    return total + cur
  }, 0) / nums.length
}
// @lc code=end

