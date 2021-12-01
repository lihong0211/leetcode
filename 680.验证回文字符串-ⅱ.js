/**
 * @param {string} s
 * @return {boolean}
 */
// 此种方式会超时
//  var validPalindrome = function(s) {
//   const len = s.length
//   let ret = false
//   for (let i = 0; i < len; i++) {
//       const str = s.substr(0,i) + s.substr(i + 1, len - 1)
//       // console.log(str)
//       if(isValid(str)) {
//           ret = true
//           break
//       }
//   }
//   return ret
// };

// function isValid (s) {
//   let left = 0, right = s.length - 1
//   let ret = true
//   while (left < right) {
//       if (s[left] !== s[right]) {
//           ret = false
//           break
//       }
//       left++
//       right--
//   }
//   return ret
// }

var validPalindrome = function (s, count = 0) {
  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      if (count > 0) return false
      return validPalindrome(s.slice(left + 1, right + 1), count + 1) || validPalindrome(s.slice(left, right), count + 1)
    } else {
        left++
        right--
    }
  }
  return true
}