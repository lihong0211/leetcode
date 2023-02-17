/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  dfs(head)
  return head
};

function dfs (head) {
  let cur = head, last = null
  while (cur) {
    if (cur.child) {
      const next = cur.next
      const childLast = dfs(cur.child)
      cur.next = cur.child
      cur.child.prev = cur
      if (next) {
        childLast.next = next
        next.prev = childLast
      }
      cur.child = null
      last = childLast
    } else {
      last = cur
    }
    cur = cur.next
  }
  return last
}
// @lc code=end

