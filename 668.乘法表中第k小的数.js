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

 // 二分法   是真的看不懂
var findKthNumber = function(m, n, k) {
    if(k == 1){
    return 1;
    } 
    if(k == m*n){
    return m*n;
    } 
    let left = 1
    let right = m*n
    var num
    while(left < right) {
      num = (left+right) >> 1;
      let temp = enough(m, n, num);
      if(temp < k) {
        left = num+1;
      }
      else right = num;
    }
    return left;
  
};
// 干嘛？
function enough(m,n,num){
    let count = 0;
    for(let i = 1; i<=m; ++i) {
        count += Math.min(parseInt(num/i), n);
    }
    return count;
}
// @lc code=end

