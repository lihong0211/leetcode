/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
// 冒泡排序法处理
var hIndex = function (citations) {
  const len = citations.length;
  let h = 0;
  if (len === 1) return citations[0] ? 1 : 0;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (citations[j] > citations[i]) {
        const temp = citations[i];
        citations[i] = citations[j];
        citations[j] = temp;
      }
    }
    if (citations[i] >= len - i) {
      h = len - i;
    }
  }
  return h;
};
// @lc code=end
