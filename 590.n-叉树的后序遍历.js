/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const res = []
  dfs(root, res)
  return res
};

var dfs = function(root, res) {
  if (!root) return
  for(let child of root.children) {
      dfs(child, res)
  }
  res.push(root.val)
}
// @lc code=end

