/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = []
    let temp = {
        next: head
    }
    while (temp.next) {
        arr.push(temp.next.val)
        temp.next = temp.next.next
    }
    if (arr.length === 1) {
        return null
    }
    arr.splice(arr.length - n, 1)
    let ele = {
        next: head
    }
    let cur = ele
    while(arr.length) {
        if (arr.length === 1) {
            cur.next.val = arr.shift()
            cur.next.next = null
            return head
        }
        cur.next.val = arr.shift()
        cur.next = cur.next.next
    }
};
// @lc code=end

