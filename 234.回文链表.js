/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arr = []
  let p = head
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  const left = arr.splice(0, arr.length / 2).join('')
  const right = arr.length > left.length ? arr.splice(1).reverse().join('') : arr.reverse().join('')
  return left === right
};
// @lc code=end

