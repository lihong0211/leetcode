/*
 * @lc app=leetcode.cn id=786 lang=javascript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  const pq = new MinPriorityQueue({ 
    compare: (a, b) => arr[a[0]] * arr[b[1]] - arr[b[0]] * arr[a[1]]
  });

  const len = arr.length
  for (let i = 0; i < len; i++) {
    pq.enqueue([0, i])
  }

  while (k-- >= 0 && pq.size()) {
    const [i, j] = pq.dequeue();
    if (!k) return [arr[i], arr[j]]
    // 下一个备选：分母不变的情况下分子变大-->i++
    if (i + 1 < j) pq.enqueue([i + 1, j]);
  }
};
// @lc code=end

