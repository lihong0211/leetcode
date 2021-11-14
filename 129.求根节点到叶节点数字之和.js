/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  const ret = []
  const vals = []
  dfs(root, vals, ret)
  return sum(ret)
};

function dfs (root, vals, ret) {
  if (!root) return
  vals.push(root.val)
  if (!root.left && !root.right) {
    ret.push(toNumber(vals))
  }
  dfs(root.left, [...vals], ret)
  dfs(root.right, [...vals], ret)
}

function toNumber (nums) {
  let ret = 0
  for (let i = 0; i < nums.length; i++) {
    ret += nums[i] * Math.pow(10, nums.length - i - 1)
  }
  return ret
}

function sum (nums) {
  return nums.reduce((total, cur, index, nums) => {
    return cur + total
  }, 0)
}
// @lc code=end

