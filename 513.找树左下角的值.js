/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
// 层序遍历 高度减1层遍历完成后 队列首部就是目标节点
var findBottomLeftValue = function(root) {
  const queue = []
  let level = 1
  let cur
  const height = Maxheight(root)
  queue.push(root)
  while(queue.length && level < height) {
    let l = queue.length
    for(let i = 0; i < l; i++) {
      cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    level++
  }
  return queue.shift().val
};

function Maxheight (root) {
  if (!root) return 0
  return Math.max(Maxheight(root.left), Maxheight(root.right)) + 1
}
// @lc code=end

