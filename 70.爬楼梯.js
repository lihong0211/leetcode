/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    // 暴力递归  只能超时了。。。
    // if(n <=2) return n
    // return climbStairs(n - 2) + climbStairs(n - 1)

    // 这个题跟斐波那契数差不多 一毛一样？ 老子这个代码直接copy过来。

    let cache = []
    for (let i = 0; i <= n; i++) {
        if (i <= 2) {
            cache[i] = i
        } else {
            cache[i] = cache[i-1] + cache[i-2]
        }
    }
    return cache[n]

};
// @lc code=end

