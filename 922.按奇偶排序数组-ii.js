/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
// 速度还可以  空间复杂度高
// var sortArrayByParityII = function(A) {
//     let arrA = A.filter(item => item % 2) // 奇数
//     let arrB = A.filter(item => !(item % 2)) // 偶数
//     let arr = []
//     for(let i = 0; i < arrA.length; i++) {
//         arr.push(arrB[i])
//         arr.push(arrA[i])
//     }
//     return arr
// };
var sortArrayByParityII = function(arr) {
    let a = 0 // 奇数标记
    let b = 1 // 偶数标记
    let r = []
    arr.forEach(item => {
        if (item % 2) {
            r[b] = item
            b += 2
        } else {
            r[a] = item
            a += 2
        }
    })
    return r
};
// @lc code=end

