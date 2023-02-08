/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 冒泡
var sortArray = function (arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = len - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }
    return arr
}

// 选择
var sortArray = function (arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let minIdx = i, min = arr[i]
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIdx = j
            }
        }
        swap(arr, i, minIdx)
    }
    return arr
}


// 插入
var sortArray = function (arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
        let prev = i - 1
        const temp = arr[i]
        while(prev >=0 && arr[prev] > temp) {
            arr[prev + 1] = arr[prev]
            prev -= 1
        }
        arr[prev + 1] = temp
    }
    return arr
}

// 快速
var sortArray = function (arr) {
    if (arr.length < 2) return arr
    const len = arr.length
    const left = [], right = []
    const mid = arr[0]
    for (let i = 1; i < len; i++) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sortArray(left).concat(mid, sortArray(right))
}

// 归并
var sortArray = function (arr) {
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(sortArray(left), sortArray(right))
}
function merge (left, right) {
    const res = []
    const len = left.length + right.length
    for (i = 0, li = 0, ri = 0; i < len; i++) {
        if (li === left.length) {
            res.push(right[ri])
            ri++
        } else if (ri === right.length) {
            res.push(left[li])
            li++
        } else if (left[li] < right[ri]) {
            res.push(left[li])
            li++
        } else {
            res.push(right[ri])
            ri++
        }
    }
    return res
}

// 希尔
var sortArray = function (arr) {
    const len = arr.length
    let gap = Math.floor(len / 2)
    while (gap >= 1) {
        for (let i = gap; i < len; i++) {
            let prev = i - gap
            const temp = arr[i]
            while(prev >= 0 && arr[prev] > temp) {
                arr[prev + gap] = arr[prev]
                prev -= gap
            }
            arr[prev + gap] = temp
        }
        gap = Math.floor(gap / 2)
    }
    return arr
}

// 计数
var sortArray = function (arr) {
    const len = arr.length
    const max = Math.max(...arr)
    const min = Math.min(...arr)
  
    const countArr = Array(max - min + 1).fill(0)
  
    for (let i = 0; i < len; i++) {
      countArr[arr[i] - min] += 1
    }
  
    for (let i = 0, j = 0; i < countArr.length; i++) {
      while(countArr[i] > 0) {
        arr[j] = min + i
        countArr[i] -= 1
        j++
      }
    }
    return arr
}


// 桶排序  超时了
var sortArray = function (arr) {
    const len = arr.length
    const max = Math.max(...arr)
    const min = Math.min(...arr)
  
    const bucketNum = Math.floor((max - min) / len) + 1
    const bucketArr = Array(bucketNum).fill([])
  
    for (let i = 0; i < len; i++) {
        const idx = Math.floor((arr[i] - min) / len)
        bucketArr[idx].push(arr[i])
    }

  
    for (let i = 0, j = 0; i < bucketNum; i++) {
        bucketArr[i].sort((m, n) => m - n)
        while(bucketArr[i].length) {
            arr[j] = bucketArr[i].shift()
            j++
        }
    }
    return arr
}

var sortArray = function (arr) {
    const len = arr.length
    if (len <= 1) return arr
    for (let i = Math.floor(len / 2); i >= 0; i--) {
      maxHeapify(arr, i, len)
    }
    for (let j = 0; j < len; j++) {
      swap(arr, 0, len - 1 - j)
      maxHeapify(arr, 0, len - 1 - j)
    }
    return arr
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


// @lc code=end

