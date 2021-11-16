/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// const test = nums => {
//     const uninclude = (arr, it) => {
//         return !arr.find(item => item.sort((m, n) => n - m).join() === [].concat([...it]).sort((m, n) => n - m).join())
//     }

//     const backtrack = (list, temp, nums) => {
//         if (uninclude(list, temp)) {
//             list.push([...temp])
//             if (temp.length === nums.length) return
//         }
//         for (let i = 0; i < nums.length; i++) {
//             if (temp.includes(nums[i])) continue
//             temp.push(nums[i])
//             backtrack(list, temp, nums)
//             temp.pop()
//         }
//     }
    
//     const list = []
//     backtrack(list, [], nums)
//     console.log(list)
//     return list
// }
// TODO:浏览器算到8位就已经卡死

var subsets = function (nums) {
    const ret = []
    backTrack(nums, [], ret, 0)
    return ret
}

function backTrack (nums, path, ret, start) {
    if (start > nums.length) return
    ret.push([...path])
    for (let i = start; i < nums.length; i++) {
        path.push(nums[i])
        backTrack(nums, [...path], ret, i + 1)
        path.pop()
    }
}
// @lc code=end

