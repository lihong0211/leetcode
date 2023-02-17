/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head

    const mid = middleNode(head)
    
    const rightHead = mid.next
    mid.next = null

    const left = sortList(head)
    const right = sortList(rightHead)

    return mergeTwoLists(left, right)
};

// 876题
var middleNode = function(head) {
//   let slow = fast = head
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// 21题
var mergeTwoLists = function(l1, l2) {
    const preHead = new ListNode(-1)
    let p = preHead
    while (l1 && l2) {
      if (l1.val > l2.val) {
        p.next = l2
        l2 = l2.next
      } else {
        p.next = l1
        l1 = l1.next
      }
      p = p.next
    }
    p.next = l1 || l2
    return preHead.next
  };

  var sortList = function(head) {
    if (!head || !head.next) return head
    // 找到中间节点 切断链表
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    const rightHead = slow.next
    slow.next = null

    let left = sortList(head)
    let right = sortList(rightHead)

    // 合并两个链表
    const preHead = new ListNode(-1)
    let p = preHead
    while (left && right) {
      if (left.val > right.val) {
        p.next = right
        right = right.next
      } else {
        p.next = left
        left = left.next
      }
      p = p.next
    }
    p.next = left || right
    return preHead.next
};
// @lc code=end

