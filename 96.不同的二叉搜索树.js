/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 看似是一个数的问题  其实是一个动态规划的问题
var numTrees = function(n) {
  // 假设 n 个节点存在二叉排序树的个数是 G (n)，令 f(i) 为以 i 为根的二叉搜索树的个数，则
  // G(n)=f(1)+f(2)+f(3)+f(4)+...+f(n)
  // 当 i 为根节点时，其左子树节点个数为 i-1 个，右子树节点为 n-i，则
  // f(i)=G(i−1)∗G(n−i)

  // G(n)=G(0)∗G(n−1)+G(1)∗(n−2)+...+G(n−1)∗G(0)

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
      // dp[3] = dp[0]*dp[2] + dp[1]*dp[1] + dp[2]*dp[0]
      // dp[4] = dp[0]*dp[3] + dp[1]*dp[2] + dp[2]*dp[1] + dp[3]*dp[0]
      // dp[5] = dp[0]*dp[4] + dp[1]*dp[3] + dp[2]*dp[2] + dp[3]*dp[1] + dp[4]*dp[0]
      for (let j = 1; j <= i; j++) {
        dp[i] += dp[j - 1] * dp[i - j];
      }
  }
  return dp[n];
};
// @lc code=end

