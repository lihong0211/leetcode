/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const arr = []
  tranverse(root, arr)
  let left = -1
  let right = -1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i + 1].val) {
      if (left !== -1){
        right = i + 1
      } else {
        left = i
      }
    } 
  }
  right = right !== -1 ? right : left + 1
  const temp = arr[left].val
  arr[left].val = arr[right].val
  arr[right].val = temp
};

function tranverse (root, arr) {
  if (!root) return
  tranverse(root.left, arr)
  arr.push(root)
  tranverse(root.right, arr)
}
// @lc code=end

