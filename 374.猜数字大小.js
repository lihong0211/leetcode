/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = n => {
    let start = 1
    let end = n

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        switch(guess(mid)) {
            case -1:
                end = mid
                break
            case 1:
                start = mid + 1
                break
            case 0:
                return mid
        }
    }
};
// @lc code=end

