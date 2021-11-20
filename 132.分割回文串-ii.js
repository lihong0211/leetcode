/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// let min = Infinity
// var minCut = function(s) {
//   min = Infinity
//   backtrack(s, [])
//   return min
// };

// function backtrack (s, path) {
//   if (!s.length) {
//     min = Math.min(min, path.length - 1)
//     return
//   }
//   for(let i = 1; i < s.length + 1; i++) {
//     const item = s.slice(0, i)
//     if (!isValid(item)) continue
//     path.push(item)
//     s = s.slice(i)
//     backtrack(s, path)
//     s = path.pop() + s
//   }
// }

// function isValid (s) {
//   let start = 0, end = s.length - 1
//   for (i = start, j = end; i < j; i++, j--) {
//     if (s[i] !== s[j]) return false
//   }
//   return true
// }

var minCut = function(s) {
  let min = Infinity
  const dfs = (i) => {
      if (i === n) {
          // ret.push(ans.slice());
          min = Math.min(min, ans.length - 1)
          return;
      }
      for (let j = i; j < n; ++j) {
          if (f[i][j]) {
              ans.push(s.slice(i, j + 1));
              dfs(j + 1);
              ans.pop();
          }
      }
  }
  
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  let ans = [];
  
  for (let i = n - 1; i >= 0; --i) {
      for (let j = i + 1; j < n; ++j) {
          f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
      }
  }
  dfs(0);
  return min;
};
// @lc code=end

