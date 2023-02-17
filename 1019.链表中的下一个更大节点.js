/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  let p = head
  const arr = []
  while (p) {
    let p1 = p
    const val = p.val
    while (p1 && p1.val <= val) {
      p1 = p1.next
    }
    arr.push(p1 ? p1.val : 0)
    p = p.next
  }
  return arr
};