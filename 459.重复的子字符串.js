/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // 模式匹配， \1 \2 \n是用在正则表达式大匹配环节: 
  // /^(foo) (bar) \2 \1$/.test('foo bar bar foo')
  // 在正则表达式大替换环节，使用$1 $2 $n这样大语法：
  // 'foo bar'.replace(/(...) (...)/, '$2 $1')
  return /^(\w+)\1+$/.test(s)
};
// @lc code=end

