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
// var detectCycle = function(head) {
//     let slow = head
//     let start = head
//     let fast = head
//     FIXME:(slow === fast || slow === fast.next) 这个判断真的很蠢，因为再走一步他们就相等了。。。
//     while(true) {
//         if (!fast || !fast.next) {
//             return null
//         } else if (slow === fast || slow === fast.next) {
//             if (slow === fast) {
//                 while (slow !== start) {
//                     slow = slow.next
//                     start = start.next
//                 }
//                 return slow
//             } else {
//                 start = start.next
//                 while (slow !== start) {
//                     slow = slow.next
//                     start = start.next
//                 }
//                 return slow
//             }
//         } else {
//             slow = slow.next
//             fast = fast.next.next
//         }
//     }
//     return slow
// };

// 使用额外空间  空间复杂度 O(n)
// var detectCycle = function(head) {
//     let cache = new Set()
//     while (head) {
//         if (cache.has(head)) {
//             return head
//         } else {
//             cache.add(head)
//             head = head.next
//         }
//     }
//     return null
// }

var detectCycle = function(head) {
    // 快，慢，从头开始的3个指针
    let [slow, fast, start] = [head, head, head]
    
    while(fast && fast.next) {
        // 分快慢跑
        slow = slow.next
        fast = fast.next.next
        // 找到相遇的节点
        if (fast === slow) {
            // 从该节点开始都慢跑 再找相遇节点
            while (slow && start) {
                if (slow === start) return slow
                slow = slow.next
                start = start.next
            }
        } 
    }
    return null
}

// @lc code=end

