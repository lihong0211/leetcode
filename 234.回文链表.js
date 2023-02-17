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

  // return arr.join('') === arr.reverse().join('')
  let left = 0, right = arr.length - 1
  while (arr[left] === arr[right] && right >= left) {
    left++
    right--
  }
  return left === right + 2 || left === right + 1
};
// @lc code=end

