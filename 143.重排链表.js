/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const arr = []
  let p = head
  while(p) {
    arr.push(p.val)
    p = p.next
  }
  let p1 = head
  let left = true
  while(p1) {
    if (left) {
      p1.val = arr.shift()
    } else {
      p1.val = arr.pop()
    }
    left = !left
    p1 = p1.next
  }
  return head
};

var reorderList = function(head) {
  let p = head, count = 0
  hash = {}
  while (p) {
    hash[count] = p
    p = p.next
    count++
  }
  let left = 1, right = count - 1
  let p1 = head
  for (let i = 0; i < count - 1; i++) {
    if (!(i % 2)) {
      hash[right].next = null
      p1.next = hash[right]
      right--
    } else {
      hash[left].next = null
      p1.next = hash[left]
      left++
    }
    p1 = p1.next
  }
};
// @lc code=end

