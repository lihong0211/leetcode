/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const hash = {}, end = inorder.length - 1
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i
  }
  return genTree(preorder, 0, end, inorder, 0, end, hash)
};

function genTree (preorder, p_start, p_end, inorder, i_start, i_end, hash) {
  if (p_start > p_end) return null
  const root = new TreeNode(preorder[p_start])
  const root_idx = hash[root.val]
  const leftNum = root_idx - i_start
  root.left = genTree(preorder, p_start + 1, p_start + leftNum, inorder, i_start, root_idx, hash)
  root.right = genTree(preorder, p_start + 1 + leftNum, p_end, inorder, root_idx + 1, i_end, hash)
  return root
}
// @lc code=end

