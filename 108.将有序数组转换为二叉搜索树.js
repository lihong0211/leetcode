/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 相似题目 不同的二叉搜索树
var sortedArrayToBST = function(nums) {
  return genTree(nums, 0, nums.length - 1)
};
function genTree(nums, start, end) {
  if (start > end) {
    return null
  }
  const mid = Math.floor((start + end) / 2)
  const node = new TreeNode(nums[mid])
  node.left = genTree(nums, start, mid - 1)
  node.right = genTree(nums, mid + 1, end)
  return node
}
// @lc code=end

