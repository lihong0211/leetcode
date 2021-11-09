/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (root === null) return []
  const ret = []
  const queue = []
  let levelRet = []
  queue.push(root)
  left2Right = true
  while(queue.length) {
    levelRet = []
    const l = queue.length
    // 一次处理当前层的所有元素
    for (let i = 0; i < l; i++) {
      const cur = queue.shift()
      left2Right ? levelRet.push(cur.val) : levelRet.unshift(cur.val)
      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null){
        queue.push(cur.right)
      }
    }
    ret.push(levelRet)
    left2Right = !left2Right
  }
  return ret
};
// @lc code=end

