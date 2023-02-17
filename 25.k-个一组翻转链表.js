/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let count = 0, p = head
  while (p) {
    count++
    p = p.next
  }

  const num = Math.floor(count / k)
  p = head
  let last = p
  let newHead = null
  for (let i = 0; i < num; i++) {
    let prev = null, cur = p
    let j = 0
      while (j < k && cur) {
      const next = cur.next // 缓存next
      cur.next = prev  // 反转
      prev = cur  // 右移prev
      cur = next // 右移cur
      j++
    }
    if (i === 0) newHead = prev
    if (i > 0) {
      last.next = prev
    }
    if (i === num - 1) {
      p.next = cur
    }
    last = p
    p = cur
  }
  return newHead
};
// @lc code=end

