/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, arr = []) {
    if(root) {
        inorderTraversal(root.left, arr)
        arr.push(root.val)
        inorderTraversal(root.right, arr)
    }
    return arr
};
// @lc code=end

