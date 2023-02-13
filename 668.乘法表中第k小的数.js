/*
 * @lc app=leetcode.cn id=668 lang=javascript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 // 二分法
var findKthNumber = function(m, n, k) {
    let left = 1
    let right = m*n
    while(left < right) {
      const mid = (left+right) >> 1;
      if(count(m, n, mid) >= k) {
        right = mid
      } else {
        left = mid+1;
      }
    }
    return left;
  
};
// 统计乘法表中有多少个小于等于 k 的数目
function count(m, n, num){
    let count = 0;
    for(let i = 1; i <= m; ++i) {
        count += Math.min(parseInt(num / i), n);
    }
    return count
}

// 用优先队列  用例通过84%, 超时了。
// var findKthNumber = function (m, n, k) {
//   const pq = new MinPriorityQueue({ 
//     compare: (a, b) => (a[0] + 1) * (a[1] + 1) - (b[0] + 1) * (b[1] + 1)  
//   });
  
//   for (let i = 0; i < m; i++) {
//     pq.enqueue([i, 0])
//   }
  
//   while (k-- >= 0 && pq.size()) {
//     const [i, j] = pq.dequeue();
//     if (!k) return (i + 1) * (j + 1)
//     if (j + 1 < n) pq.enqueue([i, j + 1]);
//   }
// }

// @lc code=end

