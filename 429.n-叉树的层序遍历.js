/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  const ret = []
  const queue = []
  let levelRet = []
  queue.push(root)
  while(queue.length) {
    levelRet = []
    const l = queue.length
    // 一次处理当前层的所有元素
    for (let i = 0; i < l; i++) {
      const cur = queue.shift()
      levelRet.push(cur.val)
      for (let child of cur.children) {
        queue.push(child)
      }
    }
    ret.push(levelRet)
  }
  return ret
};
// @lc code=end

