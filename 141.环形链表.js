/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 // 声明链表数据结果
class Node {
    constructor(value) {
        this.value = value
        this.next = undefined
    }
}
class NodeList {
    constructor(arr) {
        let head = new Node(arr.shift())
        let next = head
        arr.forEach(item => {
            item.next = new Node(item)
            next = next.next
        })
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     // 龟兔赛跑， 有环到情况下兔子会跑到乌龟后面去
//     if (!head) return false
//     let slow = head
//     let fast = head.next
//     while (true) {
//         // 没有快指针-即只有一个元素
//         // 快指针到末尾了
//         if(!fast || !fast.next) {
//             return false
//         } else if (fast == slow || slow === fast.next) {
//             return true
//         } else {
//             slow = slow.next // 移动一位
//             fast = fast.next.next // 移动两位
//         }
//     }
// };

const hasCycle = head => {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) {
            return true
        }
    }

    return false
}
// @lc code=end

