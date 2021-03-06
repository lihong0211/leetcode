/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 双指针法。初始化两个指针pA和pB分别指向headA和headB，
    // 每次pA和pB各走一步，当pA触底后变轨到headB，同理，当pB触底后变轨到headA。
    // 这样就只需遍历（A的非公共部分+B的非公共部分+AB的公共部分）。
    let p1 = headA
    let p2 = headB
    while (p1 !== p2) { // 都遍历完了  p1 p2 都为null
        p1 = p1 ? p1.next : headB
        p2 = p2 ? p2.next : headA
    }
    return p1    
};
// @lc code=end

