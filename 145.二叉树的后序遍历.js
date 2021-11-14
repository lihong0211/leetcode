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
// const postorderTraversal = (root, arr = []) => {
//     if (root) {
//         postorderTraversal(root.left, arr)
//         postorderTraversal(root.right, arr)
//         arr.push(root.val)
//     }
//     return arr
// };
const postorderTraversal = (root) => {
    if (!root) return []
    const ret = []
    const stack = []
    let cur = root
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        if (cur.right && cur.r !== cur.right) {
            // 打一个标记 下次再遇到他的时候直接访问它的值并再次出栈
            cur.r = cur.right
            stack.push(cur)
            cur = cur.right
        } else {
            ret.push(cur.val)
            cur = null
        }
    }
    return ret
}



// @lc code=end

