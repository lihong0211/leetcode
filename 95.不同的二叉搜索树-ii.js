/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  return genTree(1, n)
};

function genTree (start, end) {
  const allTrees = []
  if (start > end) {
    return [null]
  }
  // 枚举可行根节点
  for (let i = start; i <= end; i++) {
    // 获得所有可行的左子树集合
    const leftTrees = genTree(start, i - 1);
    // 获得所有可行的右子树集合
    const rightTrees = genTree(i + 1, end);
    for (let l = 0; l < leftTrees.length; l++) {
      for(let r = 0; r < rightTrees.length; r++) {
        const cur = new TreeNode(i, leftTrees[l], rightTrees[r])
        allTrees.push(cur)
      }
    }
  }
  return allTrees;
}
// @lc code=end

