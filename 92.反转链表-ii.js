/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // 反转链表的思路：1-2-3-4-5，先将2换到第一个，变为：2-1-3-4-5。
    // 然后将3换到第一个，3-2-1-4-5。

    const arr = []
    let p = head
    while (p) {
      arr.push(p.val)
      p = p.next
    }
    const left = arr.splice(0, m - 1)
    const right = arr.splice(n - m + 1)
    const newArr = left.concat(arr.reverse()).concat(right)
    let p1 = head
    while(p1) {
      p1.val = newArr.shift()
      p1 = p1.next
    }
    return head
};
// @lc code=end

