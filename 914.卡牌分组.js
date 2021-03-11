/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = deck => {
    const sortDeck = deck.sort((m , n) => m - n)
    const lengthList = []
    let length = 1
    for (let i = 0; i < sortDeck.length - 1; i++) {
        if (i === sortDeck.length - 2) {
            lengthList.push(length + 1)
        }
        if (sortDeck[i + 1] === sortDeck[i]) {
            length += 1
        } else {
            if (length === 1) {
                return false
            }
            lengthList.push(length)
            length = 1
        }
    }
    if (lengthList.length === 1 && lengthList[0] > 1) {
        return true
    }

    // 求最大公约数
    const gcd = (a, b) => {
        if (b === 0) {
            return a
        } else {
            return gcd(b, a % b)
        }
    }

    let gongyueshu
    for (let i = 1; i < lengthList.length; i++) {
        gongyueshu = gcd(lengthList[i], gongyueshu ? gongyueshu : lengthList[i - 1])
    }
    return lengthList.length ? gongyueshu > 1 : false
};
// @lc code=end

