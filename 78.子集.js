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

const subsets = nums => {
    const uninclude = (arr, it) => {
        return !arr.find(item => item.sort((m, n) => n - m).join() === [].concat([...it]).sort((m, n) => n - m).join())
    }

    const backtrack = (list, temp, nums) => {
        if (uninclude(list, temp)) {
            list.push([...temp])
            if (temp.length === nums.length) return
        }
        for (let i = 0; i < nums.length; i++) {
            if (temp.includes(nums[i])) continue
            temp.push(nums[i])
            backtrack(list, temp, nums)
            temp.pop()
        }
    }
    
    const list = []
    backtrack(list, [], nums)
    console.log(list)
    return list
}
// TODO:浏览器算到8位就已经卡死
subsets([1,2,3,4,5,6,7,8,10,0])
// @lc code=end

