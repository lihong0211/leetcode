/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 携值递归
function dfs (root, vals, ret) {
  if (!root) return null
  vals.push(root.val)
  if (!root.left && !root.right) {
    ret.push(vals.join('->'))
    return
  }
  dfs(root.left, [...vals], ret)
  dfs(root.right, [...vals], ret)
}
var binaryTreePaths = function(root) {
  const ret = []
  const vals = []
  dfs(root, vals, ret)
  return ret
};
// @lc code=end

