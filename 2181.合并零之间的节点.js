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
var mergeNodes = function(head) {
  let p = head
  while (p && p.next && !!p.next.val) {
    let p1 = p.next
    let val = 0
    while (p1 && !!p1.val) {
      val += p1.val
      p1 = p1.next
    }
    p.val = val
    p.next = p1
    if (!p1.next) {
      p.next = null
    } else {
      p = p.next
    }
  }
  return head
};