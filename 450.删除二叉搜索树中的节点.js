/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (!root.left && !root.right) root = null
    else if (root.left) {
      root.val = prev(root)
      root.left = deleteNode(root.left, root.val)
    } else if (root.right) {
      root.val = next(root)
      root.right = deleteNode(root.right, root.val)
    }
  }
  return root
};

function prev (root) {
  root = root.left
  while(root && root.right) {
    root = root.right
  }
  return root.val
}

function next (root) {
  root = root.right
  while(root && root.left) {
    root = root.left
  }
  return root.val
}
// @lc code=end

