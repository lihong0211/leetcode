/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  // const arr = []
  // let p = head
  // let count = 0
  // while (p) {
  //   count++
  //   if (count % 2) {
  //     arr.push(p.val)
  //   } else {
  //     arr.splice(arr.length - 1, 0, p.val)
  //   }
  //   p = p.next
  // }
  // let p1 = head
  // while (p1) {
  //   p1.val = arr.shift()
  //   p1 = p1.next
  // }
  // return head

  // TODO: 递归
    if (!head || !head.next) return head
    let p1 = head
    let p2 = head.next
    let p3 = head.next.next
    p2.next = p1
    p1.next = swapPairs(p3)
    return p2
};
// @lc code=end

