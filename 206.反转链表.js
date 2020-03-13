/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
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
    cache.reverse()
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

