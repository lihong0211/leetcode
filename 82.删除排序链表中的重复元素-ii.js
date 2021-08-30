/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let p = {
    val: null,
    next: head
  }
  let val = null
  while(p.next && p.next.next) {
    if (p.next.next.val > p.next.val) {
      p.next = p.next.next
    } else {
      val = p.next.val
      p.next = p.next.next.next
      while(p.next && p.next.val === val) {
        p.next = p.next.next
      }
    }
  }
  return p.next
};
// @lc code=end

