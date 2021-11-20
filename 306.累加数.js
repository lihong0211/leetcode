/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
let is = false
var isAdditiveNumber = function(num) {
  if (num.length < 3) return false
  is = false
  backTrack(num, [])
  return is
};

function backTrack (s, path) {
  if (!s.length && isValid(path) && path.length >= 3) {
    is = true
    return
  }
  for (let i = 1; i < s.length + 1; i++) {
    const item = s.slice(0, i)
    if (item[0] === '0' && item.length > 1) continue
    const temp = [...path].slice(path.length - 2)
    temp.push(item)
    if (!isValid(temp)) continue
    path.push(item)
    s = s.slice(i)
    backTrack(s, path)
    s = path.pop() + s
  }
}

function isValid (arr) {
  for (let i = 2; i < arr.length; i++) {
    if (parseInt(arr[i]) !== (parseInt(arr[i - 1]) + parseInt(arr[i - 2]))) {
      return false
    } 
  }
  return true
}

// @lc code=end

