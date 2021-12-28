/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length
  let maxLen = 1
  const dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxLen = Math.max(dp[i], maxLen)
  }
  return maxLen
};
// 动态规划
 var lengthOfLIS = function(nums) {
  const len = nums.length
  const dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
};

// 贪心加二分
// 以输入序列 [0, 8, 4, 12, 2][0,8,4,12,2] 为例：

// 第一步插入 0，d = [0]d=[0]；

// 第二步插入 8，d = [0, 8]d=[0,8]；

// 第三步插入 4，d = [0, 4]d=[0,4]；

// 第四步插入 12，d = [0, 4, 12]d=[0,4,12]；

// 第五步插入 2，d = [0, 2, 12]d=[0,2,12]。

// 最终得到最大递增子序列长度为 3。

var lengthOfLIS = function (nums) {
  let len = 1, n = nums.length;
  if (n == 0) {
    return 0;
  }
  d = Array(n + 1);
  d[len] = nums[0];
  for (let i = 1; i < n; ++i) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      l = 1, r = len, pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while (l <= r) {
        mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
}
// @lc code=end

