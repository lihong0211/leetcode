/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
const hash = {
  'q': 1,
  'w': 1,
  'e': 1,
  'r': 1,
  't': 1,
  'y': 1,
  'u': 1,
  'i': 1,
  'o': 1,
  'p': 1,
  'a': 2,
  's': 2,
  'd': 2,
  'f': 2,
  'g': 2,
  'h': 2,
  'j': 2,
  'k': 2,
  'l': 2,
  'z': 3,
  'x': 3,
  'c': 3,
  'v': 3,
  'b': 3,
  'n': 3,
  'm': 3
}

var findWords = function(words) {
  // const hash = {}
  // 'qwertyuiop'.split('').forEach(item => {
  //   hash[item] = 1
  // })
  // 'asdfghjkl'.split('').forEach(item => {
  //   hash[item] = 2
  // })
  // 'zxcvbnm'.split('').forEach(item => {
  //   hash[item] = 3
  // })
  
  const res = []
  words.forEach(item => {
    const lower = item.toLowerCase()
    for(let i = 1; i < lower.length; i++) {
      if (hash[lower[i]] !== hash[lower[0]]) return
    }
    res.push(item)
  })
  return res
};
// @lc code=end

