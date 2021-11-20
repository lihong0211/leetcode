/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
// 跟复原ip地址很像
var partition = function(s) {
  const ret = []
  backtrack(s, ret, [])
  return ret
};

function backtrack (s, ret, path) {
  if (!s.length) {
    return ret.push([...path])
  }
  for(let i = 1; i < s.length + 1; i++) {
    const item = s.slice(0, i)
    if (!isValid(item)) continue
    path.push(item)
    s = s.slice(i)
    backtrack(s, ret, path)
    s = path.pop() + s
  }
}

function isValid (s) {
  let start = 0, end = s.length - 1
  for (i = start, j = end; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}

// 来自题解 动态规划预处理 时间复杂度感觉优化不大
// var partition = function(s) {
//   const dfs = (i) => {
//       if (i === n) {
//           ret.push(ans.slice());
//           return;
//       }
//       for (let j = i; j < n; ++j) {
//           if (f[i][j]) {
//               ans.push(s.slice(i, j + 1));
//               dfs(j + 1);
//               ans.pop();
//           }
//       }
//   }
  
//   const n = s.length;
//   const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
//   let ret = [], ans = [];
  
//   for (let i = n - 1; i >= 0; --i) {
//       for (let j = i + 1; j < n; ++j) {
//           f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
//       }
//   }
//   dfs(0);
//   return ret;
// };

// @lc code=end

