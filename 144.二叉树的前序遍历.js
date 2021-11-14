/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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

// 递归
// var preorderTraversal = (root, arr = []) => {
//     if (root) {
//         arr.push(root.val)
//         preorderTraversal(root.left, arr)
//         preorderTraversal(root.right, arr)
//     }
// }

// 迭代
var preorderTraversal = root => {
    const ret = []
    const stack = []
    let cur = root

    while (cur || stack.length) {
        while (cur) {
            ret.push(cur.val)
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        cur = cur.right
    }

    return ret
}
// @lc code=end

