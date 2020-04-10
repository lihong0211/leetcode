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
var binaryTreePaths = function(root) {
  let arr = []
  function traverse (node, payload) {
    if (node == null) return
    payload.push(node.val)
    if (!node.left && !node.right) {
      arr.push(payload.join('->'))
      return
    }
    if (node.left) {
      traverse(node.left, [...payload])
    }
    if (node.right) {
      traverse(node.right, [...payload])
    }
  }
  traverse(root, [])
  return arr
};
// @lc code=end

