/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 内置堆
var kthSmallest = function(matrix, k) {
  const pq = new MinPriorityQueue({ 
    compare: (a, b) => matrix[a[0]][a[1]]  - matrix[b[0]][b[1]] 
  });
  const len = matrix[0].length
  const len1 = Math.min(matrix.length, k)

  for (let i = 0; i < len1; i++) {
    pq.enqueue([i, 0])
  }

  while (k-- >= 0 && pq.size()) {
    const [i, j] = pq.dequeue();
    if (!k) return matrix[i][j]
    if (j + 1 < len) pq.enqueue([i, j + 1]);
  }
};
// @lc code=end

