/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let p1 = list1, p2 = list2, idx = 0
  while (idx < a - 1) {
    p1 = p1.next
    idx++
  }
  const prev = p1
  while (idx < b + 1) {
    p1 = p1.next
    idx++
  }

  while (p2.next) {
    p2 = p2.next
  }
  prev.next = list2
  p2.next = p1
  return list1
};