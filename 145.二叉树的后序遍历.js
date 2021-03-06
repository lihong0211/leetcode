/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
const postorderTraversal = (root, arr = []) => {
    if (root) {
        postorderTraversal(root.left, arr)
        postorderTraversal(root.right, arr)
        arr.push(root.val)
    }
    return arr
};
// @lc code=end

