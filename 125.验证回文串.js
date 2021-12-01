/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  // return str === str.split('').reverse().join('')
  let left = 0, right = str.length - 1
  let ret = true
  while(left < right) {
      if (str[left] !== str[right]) {
          ret = false
          break
      }
      left++
      right--
  }
  return ret
};