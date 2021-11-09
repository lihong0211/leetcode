/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true
  return Math.abs(maxHeight(root.left) - maxHeight(root.right)) <= 1 &&
  isBalanced(root.left) &&
  isBalanced(root.right)
};

// 二叉树的最大深度
function maxHeight (root) {
  if (!root) return 0
  return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1
}
// @lc code=end

