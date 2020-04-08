/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 先排序，然后逐个比较
var findTheDifference = function(s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  for (let i = 0; i < t.length; i++) {
      if (s[i] != t[i]) {
          return t[i];
      }
  }
};

// 一次遍历计算出两个字符串的ASCII总和，根据差值得出插入的字符
var findTheDifference = function(s, t) {
  if (!s.length) return t;
  let sum1 = 0, sum2 = 0, i = 0;

  while (i < t.length) {
      if (s[i]) sum1 += s.charCodeAt(i);
      if (t[i]) sum2 += t.charCodeAt(i);
      i++;
  }
  return String.fromCharCode(sum2 - sum1);
}

// 通过转化为数组, 通过 indexOf 进行遍历，通过splice删除
// 剩下的元素通过 toString()转化得到
var findTheDifference = function(s, t) {
  let a = s.split('')
  let b = t.split('')
  for(let i = 0; i < a.length; i++){
      let tmp = 0
      tmp = b.indexOf(a[i])
      b.splice(tmp,1)
  }
  return b.toString()
}
// TODO: 异或处理


// @lc code=end

