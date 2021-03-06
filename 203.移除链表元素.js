/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     // a=>b=>c=>
//     // 是否为第一个元素对链表对修改有影响
//     // 增加一个哨兵元素

//     let ele = {
//         next: head
//     }
//     let cur = ele
//     while(cur.next) {
//         if(cur.next.val == val) {
//             cur.next = cur.next.next
//         }else {
//             cur = cur.next 
//         }
//     }
//     return ele.next

// };

const removeElements = (head, val) => {
    let ele = {
        next: head
    }

    let cur = ele
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }

    return ele.next
}
// @lc code=end

 