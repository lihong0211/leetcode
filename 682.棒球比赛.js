/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const arr = []
    ops.forEach(item => {
        switch(item) {
            case '+': arr.push(Number(arr[arr.length -1] + arr[arr.length - 2])); break;
            case 'D': arr.push(Number(arr[arr.length - 1] * 2)); break
            case 'C': arr.pop(); break
            default: arr.push(Number(item))
        }
    })
    return arr.reduce((total, item) => {
        return total + item
    }, 0)
};

/**
 * 这种方法更贴近栈  但是性能貌似差一点
 */
// var calPoints = function(ops) {
//     const arr = []
//     let pre1 = null
//     let pre2 = null
//     ops.forEach(item => {
//         switch(item) {
//             case '+': {
//                 pre1 = arr.pop()
//                 pre2 = arr.pop()
//                 arr.push(pre2, pre1, pre1 + pre2)
//                 break
//             }
//             case 'D': {
//                 pre1 = arr.pop()
//                 arr.push(pre1, pre1 * 2)
//                 break
//             }
//             case 'C': arr.pop(); break
//             default: arr.push(Number(item))
//         }
//     })
//     return arr.reduce((total, item) => {
//         return total + item
//     }, 0)
// };

console.log(calPoints(['5', '2', '+', 'D']))
// @lc code=end

