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

// FIXME:简单容易理解
// var preorderTraversal = function(root, arr = []) { 
//     if (root) {
//         // 所谓前序遍历，就是先处理自己，再处理左右！
//         arr.push(root.val)
//         preorderTraversal(root.left, arr)
//         preorderTraversal(root.right, arr)
//     }
//     return arr
// };

// 递归
const preorderTraversal = (root, arr = []) => {
    if (root) {
        arr.push(root.val)
        preorderTraversal(root.left, arr)
        preorderTraversal(root.right, arr)
    }
}

// 迭代不易理解
var preorderTraversal = function(root) { 
    let ret = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while(cur) {
            ret.push(cur.val)
            stack.push(cur) // 缓存这个cur
            cur = cur.left
        }
        cur = stack.pop() // 通过这个cur找它的right
        cur = cur.right
    }
    return ret
};

// 迭代
const preorderTraversal = root => {
    let ret = []
    let stack = []
    let cur = root

    while (cur & stack.length) {
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

