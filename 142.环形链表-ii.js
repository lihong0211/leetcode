/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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

// 使用额外空间  空间复杂度 O(n)
var detectCycle = function(head) {
    let cache = new Set()
    while (head) {
        if (cache.has(head)) {
            return head
        } else {
            cache.add(head)
            head = head.next
        }
    }
    return null
}

const detectCycle = head => {
    let [slow, fast, start] = [head, head, head]

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            while (slow && start) {
                if (slow === start) {
                    return slow
                }
                slow = slow.next
                start = start.next
            }
        }
    }

    return null
}



// @lc code=end

