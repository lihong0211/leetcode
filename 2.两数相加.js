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

var addTwoNumbers = function (l1, l2) {
    const preHead = new ListNode()
    let more = 0
    let p = preHead
    while(l1 && l2) {
        const val = l1.val + l2.val + more
        more = val > 9 ? 1 : 0
        l1.val = val % 10
        p.next = l1
        l1 = l1.next
        l2 = l2.next
        p = p.next
    }
    if (!l1 && !l2) {
        if (more) p.next = new ListNode(1)
    } else if (l1 || l2){
        p.next = l1 || l2
        while (p.next) {
            const val = p.next.val + more
            more = val > 9 ? 1 : 0
            p.next.val = val % 10
            p = p.next
        }
        if (more) p.next = new ListNode(1)
    }
    return preHead.next
}
// @lc code=end

