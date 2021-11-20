/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const stack = []
  const arr = Array(n).fill('(').concat(Array(n).fill(')'))
  const used = Array(2 * n).fill(false)
  const ret = []
  console.log(arr)
  backTrack(arr, '', ret, used, stack, n)
  return ret
};

function backTrack (arr, path, ret, used, stack, n) {
  if (path.length === 2 * n && !stack.length) {
    console.log(11, path)
    ret.push(path)
  }
  for (let i = 0; i < arr.length; i++) {
    if (!stack.length && arr[i] === ')') continue
    if (!used[i]) {
      path += arr[i]
      used[i] = true
      if (arr[i] === '(') {
        stack.push(arr[i])
      } else {
        stack.pop()
      }
      backTrack(arr, path, ret, used, stack, n)
      path = path.slice(0, -1)
      used[i] = false
    }
  }
}

// @lc code=end

