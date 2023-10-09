/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  // zero one two three four five six seven eight nine

  // ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]
  const hash = {}
  for (let i = 0 ; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1 
  }

  const arr = ['zero', 'one', 'two', ',three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for (let i = 0; i < 9; i++) {
    const letter = arr[i]
    let min = Infinity
  }
  // 001
  // zerozeroone
};
// @lc code=end

