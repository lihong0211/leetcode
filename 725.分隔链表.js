/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  let count = 0, p = head
  while (p) {
    count++
    p = p.next
  }
  const max = Math.ceil(count / k) // 多1的组单组元素个数
  const moreNum = max === 1 
  ? count 
  : (count % k === 0 ? k : count % k)  // 多1的组的组数
  p = head
  const arr = []

  for (let i = 0; i < k - 1; i++) {
    let p1 = p
    for (j = 0; j < max - (i < moreNum ? 1 : 2); j++) {
      p1 = p1.next
    }
    if (!p1) {
      arr.push(null)
      continue
    }
    const next = p1.next
    p1.next = null
    arr.push(p)
    p = next
  }
  arr.push(p)
      
  return arr
};
// @lc code=end

