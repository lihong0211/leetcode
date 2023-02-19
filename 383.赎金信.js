/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const hashA = {}
  const hashB = {}
  while(magazine.length) {
      const s = magazine.slice(0, 1)
      hashB[s] = (hashB[s] || 0) + 1
      magazine = magazine.slice(1)
  }
  while(ransomNote.length) {
      const s = ransomNote.slice(0, 1)
      if (!(s in hashB)) return false
      hashA[s] = (hashA[s] || 0) + 1
      if (hashA[s] > hashB[s]) return false
      ransomNote = ransomNote.slice(1)
  }
  return true
};
// @lc code=end

