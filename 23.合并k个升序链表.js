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
    const len = lists.length
    if(len == 0) return null;
    if(len == 1) return lists[0]
    let list = []
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

