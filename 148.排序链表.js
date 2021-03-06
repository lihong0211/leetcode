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
    // 缓存链表各元素的值
    let cache = []
    let ele = {
        next: head
    }
    while(ele.next) {
        cache.push(ele.next.val)
        ele = ele.next
    }
    // 将缓存值翻转
    cache.sort((m,n) => {
        return m - n
    })
    let temp = {
        next: head
    }
    // 赋值给链表
    while(cache.length) {
        temp.next.val = cache.shift()
        temp.next = temp.next.next
    }
    // 返回链表
    return head
};
// @lc code=end

