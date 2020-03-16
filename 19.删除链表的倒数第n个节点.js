/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = []
    let temp = {
        next: head
    }
    while (temp.next) {
        arr.push(temp.next.val)
        temp.next = temp.next.next
    }
    console.log(arr)
    let ele = {
        next: head
    }
    let cur = ele
    while(cur.next) {
        if(cur.next.val == arr[arr.length - n]) {
            cur.next = cur.next.next
        }else {
            cur = cur.next 
        }
    }
    return ele.next
};
// @lc code=end

