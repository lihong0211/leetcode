/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !k || !head.next) return head
  let p = head, num = 0
  while (p) {
    num++
    p = p.next
  }
  if (!(k % num)) return head

  let slow = fast = head
  let count = 0
  while (fast && fast.next) {
    fast = fast.next
    if (count >= (k % num)) {
      slow = slow.next
    }
    count++
  }
  const next = slow.next
  slow.next = null
  fast.next = head
  return next
};
// @lc code=end

