/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  let flag = true
  while (p) {
    if (p.val === arr[arr.length - 1]) {
      if (flag) {
        p = p.next
      } else {
        p = p.next
        flag = true
      }
    } else {
      if (flag) {
        arr.pop()
      }
      arr.push(p.val)
      p = p.next
      flag = false
    }
  }
  if (flag) {
    arr.pop()
  }
  let p1 = head
  if (!arr.length) return null

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


var deleteDuplicates = function (head) {
  const prevHead = new ListNode()
  prevHead.next = head
  let pre = prevHead, cur = head
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      // 指针跳过重复元素
      cur = cur.next
    }
    if (pre.next === cur) {
      pre = pre.next
    } else {
      // 删除所有重复元素
      pre.next = cur.next
    }
    cur = cur.next
  }
  return prevHead.next
}
// @lc code=end

