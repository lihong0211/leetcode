/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
  const vals = dfs(root)
  let min = Infinity
  for(let i = 1; i < vals.length; i++) {
    const diff = Math.abs(vals[i] - vals[i - 1])
    if (diff < min) min = diff
  }
  return min
};

function dfs (root, ret = []) {
  if (!root) return
  if (root.left) dfs(root.left, ret)
  ret.push(root.val)
  if (root.right) dfs(root.right, ret)
  return ret
}
// @lc code=end

