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
  const arr = []
  let p = head
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  for (let i = 0; i < k % arr.length; i++) {
    arr.unshift(arr.pop())
  }
  let p1 = head
  while (p1) {
    p1.val = arr.shift()
    p1 = p1.next
  }
  return head
};
// @lc code=end

