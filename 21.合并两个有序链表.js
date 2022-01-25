/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let list = []
    const lists = [l1, l2]
    lists.forEach(item => {
        while(item) {
            list.push(item.val)
            item = item.next
        }
    })
    list.sort((m, n) => m - n)
    if (!list.length) {
        return null
    }
    let head = new ListNode(list.shift())
    let next = head
    list.forEach(item => {
        next.next = new ListNode(item)
        next = next.next
    })
    return head
};

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
// @lc code=end

