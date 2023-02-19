/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const hash = {}
  let res = 0
  emails.forEach(item => {
    let arr = item.split('@')
    arr[0] = arr[0].replaceAll('.', '').split('+')[0]
    const email = arr.join('@')
    if (!(email in hash)) {
      hash[email] = 1
      res++
    }
  })
  return res
};
// @lc code=end

