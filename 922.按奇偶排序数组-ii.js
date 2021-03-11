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
// const sortArrayByParityII = arr => {
//     let arrA = arr.filter(item => item % 2) // 奇数
//     let arrB = arr .filter(item => !(item % 2)) // 偶数
//     let ret = []
//     for(let i = 0; i < arrA.length; i++) {
//         ret.push(arrB[i])
//         ret.push(arrA[i])
//     }
//     return ret
// };

const sortArrayByParityII = arr => {
    let [a, b] = [0, 1]
    const [ret, len] = [[], arr.length]
    for (let i = 0; i < len; i++) {
        if (arr[i] % 2) {
            ret[b] = arr[i]
            b += 2
        } else {
            ret[a] = arr[i]
            a += 2
        }
    }
    return ret
}
// @lc code=end

