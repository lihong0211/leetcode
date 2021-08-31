/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return null
    if (!head.next) return head.next
    let fast = head
    let slow = null
    let count = 0
    while (fast.next) {
      fast = fast.next
      count++
      if (count === n) {
        slow = head
      } else if (count > n) {
        slow = slow.next
      }
    }
    if (!slow) return head.next
    slow.next = slow.next.next
    return head
};
// @lc code=end

