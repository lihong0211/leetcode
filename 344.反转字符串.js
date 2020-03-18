/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let temp
  for(let i = 0, len = s.length; i < len / 2; i++) {
    temp = s[len- i - 1]
    s[len - i - 1] = s[i]
    s[i] = temp
  }
};
// @lc code=end

