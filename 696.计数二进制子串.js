/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

    // 这种方法耗时最长

    // let r = []
    // let count = 0
    // let match = str => {
    //     let a = str.match(/^(0+|1+)/)[0]
    //     let b = `${a[0] ^ 1}`.repeat(a.length)
    //     str.startsWith(a + b) &&  count++
    // }
    // for (let i = 0, len = s.length; i < len; i++) {
    //     match(s.slice(i))
    // } 
    // return count


    // 这种方法速度第一

    s += ' '; // 末尾加一个字符，方便处理尾巴边界问题
    let prevLen = 0; // 上一个字符的总长
    let curLen = 0; // 当前字符的总长
    let charNow = s[0]; // 当前字符
    let sum = 0; // 重复总次数

    // 每次字符发生切换时，统计上一次重复的次数

    for (let i = 0; i < s.length; i++) {
        if (s[i] === charNow) {
            curLen++;
        } else {
             // '00001110011'-->4,3,2,2, ==> 0+3+2+2===7
            sum += Math.min(prevLen, curLen);
            prevLen = curLen;
            curLen = 1;
            charNow = s[i];
        }
    }

    return sum;


    // 这种方法速度第二

    // var res = [];
    // let temp = s[0];
    // let count=0;
    // for(let i of s){
    //     if(i!==temp) {
    //         res.push(count);
    //         temp=i;
    //         count=0;
    //     }
    //     count++;
    // }
    // '00001110011'-->count === [4,3,2,2,] ==> 3+2+2===7
    // res.push(count);
    // count=0;
    // for(let i=0;i<res.length-1;++i){
    //     count+= Math.min(res[i],res[i+1]);
    // }
    // return count;
};

// @lc code=end

