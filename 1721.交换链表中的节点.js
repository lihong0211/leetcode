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
var swapNodes = function(head, k) {
  let slow = fast = head
  while (k > 1) {
    fast = fast.next
    k--
  }
  const p1 = fast
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  const temp = p1.val
  p1.val = slow.val
  slow.val = temp
  return head
};