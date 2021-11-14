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
var inorderTraversal = (root, arr = []) => {
    if(root) {
        inorderTraversal(root.left, arr)
        arr.push(root.val)
        inorderTraversal(root.right, arr)
    }
    return arr
};

var inorderTraversal = root => {
    const ret = []
    const stack = []
    let cur = root
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        ret.push(cur.val)
        cur = cur.right
    }
    return ret
}
// @lc code=end

