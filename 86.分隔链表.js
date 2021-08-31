/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const left = []
  const right = []
  let p = head
  while (p) {
    if (p.val < x) {
      left.push(p.val)
    } else {
      right .push(p.val)
    }
    p = p.next
  }
  let p1 = head
  while(left.length) {
    p1.val = left.shift()
    p1 = p1.next
  }
  while(right.length) {
    p1.val = right.shift()
    p1 = p1.next
  }
  return head
};
// @lc code=end

