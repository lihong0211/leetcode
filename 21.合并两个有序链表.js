/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
<<<<<<< HEAD

=======
    let toArray = head => {
        let arr = []
        let temp = {
            next: head
        }
        while (temp.next) {
            arr.push(temp.next.val)
            temp.next = temp.next.next
        }
        return arr
    }
    let arr = toArray(l1).concat(toArray(l2)).sort((m,n) => m - n)
    console.log(arr)
    let ele = {
        next: l1
    }
    while(ele.next) {
        if (!ele.next.next) {
            ele.next.next = l2
            break
        } else {
            ele.next = ele.next.next
        }
    }
    var cur = {
        next: l1
    }
    while(arr.length) {

        cur.next.val = arr.shift()
        cur.next = ele.next.next
    }
    return cur.next
>>>>>>> 41e8f49b5d0d8585f41e324840f5def8f5c564f0
};
// @lc code=end

