/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const ret = []
    backTrack(nums, [], ret)
    return ret
};

function backTrack (nums, path, ret) {
    if(path.length === nums.length) {
        return ret.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
        if (path.includes(nums[i])) continue
        path.push(nums[i])
        backTrack(nums, path, ret)
        path.pop()
    }
}
// @lc code=end

