/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  const arr = []
  let p = head
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  insertSort(arr)
  let p1 = head
  while (p1) {
    p1.val = arr.shift()
    p1 = p1.next
  }
  return head
};
var insertSort = function (arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    const temp = arr[i]
    let prevIndex = i - 1
    // 从后往前赋值
    while (prevIndex >= 0 && arr[prevIndex] > temp) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex--
    }
    arr[prevIndex + 1] = temp
  }
}
// @lc code=end

