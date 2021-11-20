/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ret = []
  backTrack(s, [], ret)
  return ret
};

function backTrack (s, path, ret) {
  if (path.length === 4) {
    if (s.length) return
    const v = path.join('.')

    if (isValid(v) && !ret.includes(v)) return ret.push(v)
  }
  for (let i = 1; i < 4; i++) {
    if (s.length > 3 * (4 - path.length) || (s.length < 4 - path.length)) continue
    path.push(s.slice(0, i))
    s = s.slice(i)
    backTrack(s, path, ret)
    s = path.pop() + s
  }
}

function isValid (s) {
  return !(s.split('.').some(item => (Number(item) > 255 || (item[0] === '0' && item.length > 1))))
}
// @lc code=end

