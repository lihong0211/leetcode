/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function 
 * (val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null
    let res = lists[0]
    for (let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i])
    }
    return res
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

