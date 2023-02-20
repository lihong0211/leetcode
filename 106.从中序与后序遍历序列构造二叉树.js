/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const end = inorder.length - 1
  const hash = {}
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i
  }
  return genTree(inorder, 0, end, postorder, 0, end, hash)
};

var genTree = function (inorder, i_start, i_end, postorder, p_start, p_end, hash) {
  if (p_start > p_end) return null
  const root_val = postorder[p_end]
  const root = new TreeNode(root_val)

  const root_idx = hash[root_val]
  const leftNum = root_idx - i_start

  root.left = genTree(inorder, i_start, root_idx, postorder, p_start, p_start + leftNum - 1, hash)
  root.right = genTree(inorder, root_idx + 1, i_end, postorder, p_start + leftNum, p_end - 1, hash )
  return root
}
// @lc code=end

