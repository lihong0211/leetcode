/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 递推
const fib = N => {
    let cache = []

    for (let i = 0; i <= N; i++) {
        if (i < 2) {
            cache[i] = i
        } else {
            cache[i] = cache[i - 1] + cache[i - 2]
        }
    }
    return cache[N]
}

const fib = N => {
    if (N < 2) {
        return N
    } else {
        return fib(N - 1) + fib(N - 2)
    }
}

// 尾调用优化
const fib = N => {
    const fibImpl = (a, b, n) => {
        if (n === 0) {
            return a
        }
        return fibImpl(b, a + b, n -1)
    }
    return fibImpl(0, 1, N)
}
// @lc code=end






