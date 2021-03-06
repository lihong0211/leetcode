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

var removeElements = function(head, val) {
    const preHead = new ListNode(-1)
    preHead.next = head
    let p = preHead
    while (p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return preHead.next
};

// 使用递归实现
const removeElements = (head, val) => {
    if (!head) return null
    head.next = removeElements(head.next, val)
    return head.val === val ? head.next : head
}
// @lc code=end

 