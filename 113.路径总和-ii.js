/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const ret = []
  const vals = []
  dfs(root, targetSum, vals, ret)
  return ret
};

function dfs(root, targetSum, vals, ret) {
  if (!root) return
  vals.push(root.val)
  if (targetSum === root.val && !root.left && !root.right) {
    ret.push([...vals])
  }
  dfs(root.left, targetSum - root.val, [...vals], ret)
  dfs(root.right, targetSum - root.val, [...vals], ret)
}

// @lc code=end

