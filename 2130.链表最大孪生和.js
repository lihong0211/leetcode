/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let left = 0, right = arr.length - 1, max = - Infinity
  while (left < right) {
    max = Math.max(max, arr[left] + arr[right])
    left ++
    right --
  }
  return max
};