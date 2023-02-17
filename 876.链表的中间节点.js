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
var middleNode = function(head) {
  let count = 0
  let p = head
  const hash = {}
  while (p) {
      count++
      const node = { next: p}
      hash[count] = node
      p = p.next
  }
  const mid = count % 2 ? Math.floor(count / 2) + 1 : count / 2 + 1
  return hash[mid].next
};

var middleNode = function (head) {
  let slow = fast = head
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
  }
  return slow
}