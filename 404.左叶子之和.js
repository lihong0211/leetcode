/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  const ret = []
  dfs(root, ret)
  return ret.reduce((total, cur) => {
    return total + cur
  }, 0)
};
function dfs (root, ret) {
  if (!root) return ret
  if (root.left && !root.left.left && !root.left.right) {
    ret.push(root.left.val)
  }
  dfs(root.left, ret)
  dfs(root.right, ret)
}
// @lc code=end

