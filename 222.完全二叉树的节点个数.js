/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function(root) {
  const queue = []
  queue.push(root)
  return bfs(root, queue, 0)
};

function bfs (root, queue, count) {
  if (!root) return count
  while(queue.length) {
    const cur = queue.shift()
    count++
    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }
  return count
}
// @lc code=end

