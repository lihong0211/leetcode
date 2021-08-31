/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
  const arr = []
  let p = head
  while (p) {
    if (p.val !== arr[arr.length - 1]) {
      arr.push(p.val)
    }
    p = p.next
  }
  let p1 = head
  for (let i = 0; i < arr.length; i++) {
    p1.val = arr[i]
    if (i === arr.length - 1) {
      p1.next = null
    } else {
      p1 = p1.next
    }
  }
  return head
};
// @lc code=end

