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
var detectCycle = function(head) {
    if(!head) return null
    let slow = head
    let fast = head.next
    while (true) {
        if (!fast || !fast.next) {
            return null
        } else if (slow === fast) {
            let slow = head
            while(slow !== fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
            
        }else if(slow === fast.next) {
            let slow = head
            fast = fast.next
            while(slow !== fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        } else {
            slow = slow.next
            fast = fast.next.next
        }
    }
};
// @lc code=end

