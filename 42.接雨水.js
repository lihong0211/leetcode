/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 通过但是超时
// var trap = function(height) {
//   let ret = 0
//   for (let i = 1; i < height.length - 1; i++) {
//     let maxLeft = 0, maxRight = 0
//     for (let j = i - 1; j >= 0; j--) {
//       maxLeft = Math.max(height[j], maxLeft)
//     }
//     for (let j = i + 1; j < height.length; j++) {
//       maxRight = Math.max(height[j], maxRight)
//     }
//     const min = Math.min(maxLeft, maxRight)
//     if (height[i] < min) {
//       ret += min - height[i]
//     }
//   }
//   return ret
// };

// 动态规划 预先求出每个位置上对应的左边最大值，右边最大值
// var trap = function(height) {
//   let ret = 0
//   const maxLeft = [0]
//   const maxRight = []
//   maxRight[height.length - 1] = 0
//   for (let i = 1; i < height.length - 1; i++) {
//     maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1])
//   }
//   for (let i = height.length - 2; i > 0; i--) {
//     maxRight[i] = Math.max(maxRight[i + 1], height[i + 1])
//   }
//   for (let i = 1; i < height.length - 1; i++) {
//     const min = Math.min(maxLeft[i], maxRight[i])
//     if (height[i] < min) {
//       ret += min - height[i]
//     }
//   }
//   return ret
// };

// var trap = function (height) {
//   let ret = 0
//   let left = 0, right = height.length - 1
//   let maxLeft = 0, maxRight = 0
//   while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] > maxLeft) {
//         maxLeft = height[left]
//       } else {
//         ret += maxLeft - height[left]
//       }
//       left++
//     } else {
//       if (height[right] > maxRight) {
//         maxRight = height[right]
//       } else {
//         ret += maxRight - height[right]
//       }
//       right--
//     }
//   }
//   return ret
// }

// 单调递减栈
var trap = function (height) {
  const stack = [] // 按高度单调递减--索引
  let i = 0, ret = 0
  while (i < height.length) {
    while(stack.length && height[stack[stack.length - 1]] < height[i]) {
      const top = stack.pop()
      if (!stack.length) break // 当前柱子是最高的柱子了
      const dis = i - stack[stack.length - 1] - 1
      const ht = Math.min(height[i], height[stack[stack.length - 1]]) - height[top]
      ret += dis * ht
    }
    stack.push(i++)
  }
  return ret
}


// @lc code=end

