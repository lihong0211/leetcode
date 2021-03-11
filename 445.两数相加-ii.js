/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const toNumber = link => {
        let arr = []
        let ele = {
            next: link
        }
        while(ele.next) {
            arr.push(ele.next.val)
            ele.next = ele.next.next
        }
        return BigInt(arr.join(''))
    }
    const toLinkList = total => {
        const arr = total.toString().split('')
        let head = new ListNode(arr.shift())
        let next = head
        while (arr.length) {
            next.next = new ListNode(arr.shift())
            next = next.next
        }
        return head
    }
    const total = toNumber(l1) + toNumber(l2)
    return toLinkList(total)
};
// @lc code=end

