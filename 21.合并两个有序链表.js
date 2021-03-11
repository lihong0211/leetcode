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
// @lc code=end

