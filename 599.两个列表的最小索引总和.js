/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let res = [], min = Infinity
  const hash = {}

  for (let i = 0; i < list1.length; i++) {
    hash[list1[i]] = i
  }

  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in hash) {
      if (i + hash[list2[i]] < min) {
        min = i + hash[list2[i]]
        res = [list2[i]]
      } else if (i + hash[list2[i]] === min) {
        res.push(list2[i])
      }
    }
  }

  return res
};

// @lc code=end

