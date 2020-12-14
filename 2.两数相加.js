/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
        return BigInt(arr.reverse().join(''))
    }
    const toLinkList = total => {
        const arr = total.toString().split('')
        let head = new ListNode(arr.pop())
        let next = head
        while (arr.length) {
            next.next = new ListNode(arr.pop())
            next = next.next
        }
        return head
    }
    const total = toNumber(l1) + toNumber(l2)
    return toLinkList(total)
};
// @lc code=end

