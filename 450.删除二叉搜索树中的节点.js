/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root && !root.left && !root.right && root.val === key){
    return null
  }
  findK(root, key)
  return root
};

function findK (root, k) {
  let cur = root
  const stack = []
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      if (cur && cur.left && cur.left.val === k && !cur.right) {
        cur.left = cur.left.left
      } else if (cur && cur.right && cur.right.val === k && !cur.left) {
        cur.right = cur.right.right
      } else if (cur && cur.left && cur.right && cur.val === k) {
        const [val, right] = findMinAndRemove(cur.right)
        cur.val = val
        cur.right = right
      } else if (cur && !cur.left && !cur.right && cur.val === k) {
        cur = null
        return
      }
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
}

function findMinAndRemove (root) {
  if (!root.left) {
    const val = root.val
    root = root.right
    return [val, root]
  }
  let cur = root
  let stack = []
  while(cur && cur.left) {
    stack.push(cur)
    cur = cur.left
  }
  const val = cur.val
  const lastPrev = stack.pop()
  lastPrev.left = null
  return [val, root]
}
// @lc code=end

