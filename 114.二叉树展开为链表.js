/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function(root) {
  if (!root) return
  const list = []
  tranverse(root, list)
  for(let i = 0; i < list.length - 1; i++) {
    list[i].left = null
    list[i].right = list[i + 1]
  }
};

function tranverse (root, list = []) {
  if (!root) return
  list.push(root)
  tranverse(root.left, list)
  tranverse(root.right, list)
}

// @lc code=end

