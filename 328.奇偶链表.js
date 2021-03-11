/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    // TODO: 原地算法
    // let ele = {
    //     next: head
    // }
    // let cur = ele
    // let count = 1
    // while (ele.next) {
    //     if (!(count % 2)) {
    //         cur.next
    //     }
    //     count++
    // }
    // return head

    const toNumber = link => {
        let arr = []
        let ele = {
            next: link
        }
        while(ele.next) {
            arr.push(ele.next.val)
            ele.next = ele.next.next
        }
        return BigInt(arr.reverse().join(''))
    }
    
};
// @lc code=end

