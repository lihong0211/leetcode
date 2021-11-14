/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  return dfs(root, targetSum)
};

function dfs(root, targetSum) {
  if (!root) return false
  if (targetSum === root.val && !root.left && !root.right) return true
  return dfs(root.left, targetSum - root.val) ||
  dfs(root.right, targetSum - root.val)
}

