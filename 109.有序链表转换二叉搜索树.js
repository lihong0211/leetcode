/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const arr = []
  let p = head
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  return sortedArrayToBST(arr, 0, arr.length - 1)
};

function sortedArrayToBST (nums, start, end) {
  if (start > end) return null
  const mid =  Math.floor((start + end) / 2)
  const node = new TreeNode(nums[mid])
  node.left = sortedArrayToBST(nums, start, mid - 1)
  node.right = sortedArrayToBST(nums, mid + 1, end)
  return node
}
// @lc code=end

