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
var reverseList = head => {
    let cur = head
    let prev = null

    while (cur !== null) {
        const next = cur.next // 缓存next
        cur.next = prev  // 反转
        prev = cur  // 右移prev
        cur = next // 右移cur
    }

    return prev
}

// 递归 栈内存消耗大
var reverseList = function(head) {
    if (!head || !head.next) return head
    const cur = reverseList(head.next)
    head.next.next = head
    head.next = null
    return cur
};
// @lc code=end

