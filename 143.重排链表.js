/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const arr = []
  let p = head
  while(p) {
    arr.push(p.val)
    p = p.next
  }
  let p1 = head
  let left = true
  while(p1) {
    if (left) {
      p1.val = arr.shift()
    } else {
      p1.val = arr.pop()
    }
    left = !left
    p1 = p1.next
  }
  return head
};
// @lc code=end

