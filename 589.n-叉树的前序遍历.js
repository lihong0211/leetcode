/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = []
  dfs(root, res)
  return res
};

function dfs (root, res) {
  if (!root) return
  res.push(root.val)
  for (let child of root.children) {
      dfs(child, res)
  }
}
// @lc code=end

