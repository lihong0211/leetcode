/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
  if (!root) return []
  const ret = []
  const queue = []
  queue.push(root)
  let levelRet = []
  while(queue.length) {
    levelRet = []
    const l = queue.length
    for(let i = 0; i < l; i++) {
      const cur = queue.shift()
      levelRet.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    ret.unshift(levelRet)
  }
  return ret
};
// @lc code=end

