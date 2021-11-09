/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if (root === null) return []
  const ret = []
  const queue = []
  let levelRet = []
  queue.push(root)
  while(queue.length) {
    levelRet = []
    const l = queue.length
    // 一次处理当前层的所有元素
    for (let i = 0; i < l; i++) {
      const cur = queue.shift()
      levelRet.push(cur.val)
      if (cur.left !== null) queue.push(cur.left)
      if (cur.right !== null) queue.push(cur.right)
    }
    ret.push(levelRet)
  }
  return ret
};
// @lc code=end

