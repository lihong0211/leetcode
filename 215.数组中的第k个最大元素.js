/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function findKthLargest (arr, k) {
    const len = arr.length
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        // 构建最大堆
        maxHeapify(arr, i, len)
    }
    // 执行k-1次下沉
    for (let j = 0; j < k - 1; j++) {
        swap(arr, 0, len - 1 - j)
        maxHeapify(arr, 0, len - 1 - j)
    }
    // 剩下的最大堆顶部为第k大的值
    return arr[0]
}
  
function maxHeapify (arr, i, size) {
    let l = i * 2 + 1
    let r = i * 2 + 2
    let largest = i
    if (l < size && arr[l] > arr[largest]) {
        largest = l
    }
    if (r < size && arr[r] > arr[largest]) {
        largest = r
    }
    if (largest !== i) {
        swap(arr, i, largest)
        maxHeapify(arr, largest, size)
    }
  }

function swap (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
// @lc code=end

