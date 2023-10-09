/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const len = s.length
  let buckets = []
  const hash = {}
  let res = ''
  for (let i = 0; i < len; i++) {
    const val = hash[s[i].charCodeAt()]
    hash[s[i].charCodeAt()] = val ? [...val, s[i]] : [s[i]] 
  }
  for (let i = 97; i < 123; i++) {
    if (hash[i]) {
      buckets.push(hash[i])
    }
  }
  let reverse = false
  while(buckets.length) {
    res += reverse ? buckets.reduceRight((total, item) => total + item.pop(), '') : buckets.reduce((total, item) => total + item.pop(), '')
    buckets = buckets.filter(item => !!item.length)
    reverse = !reverse
  }
  return res
};

// @lc code=end

