/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// hash + 桶
var topKFrequent = function(nums, k) {
  const map = new Map()
  nums.forEach(item => {
      map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  })
  if (k === map.size) return [...map.keys()]
  const arr = [], res = []
  map.forEach((v, k) => {
      if (!arr[v]) arr[v] = [k]
      else arr[v].push(k)
  })
  // console.log(arr)

  for (let i = arr.length - 1; i >= 0, res.length < k; i--) {
      if (arr[i]) {
          res.push(...arr[i])
      }
  }
  return res
};

// 堆
var topKFrequent = function (nums, k) {
  const map = new Map()
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })
  const heap = []
  let len = 0
  map.forEach((val, key) => {
    if (len < k) {
      heap.push(key)
      if (len === k - 1) {
        // 构建最小堆  利用map做的映射
        for (let i = Math.floor(k / 2); i >= 0; i--) {
          heapify(map, heap, k, i)
        }
      }
    } else {
      if (map.get(heap[0]) < val) {
        heap[0] = key
        heapify(map, heap, k, 0)
      }
    }
    len++
  })
  return heap
}
function heapify (map, heap, size, i) {
  const l = i * 2 + 1
  const r = i * 2 + 2
  let min = i
  if (l < size && map.get(heap[l]) < map.get(heap[min])) {
    min = l
  }
  if (r < size && map.get(heap[r]) < map.get(heap[min])) {
    min = r
  }
  if (min !== i) {
    ;[heap[i], heap[min]] = [heap[min], heap[i]]
    heapify(map, heap, size, min)
  }
}

 
// @lc code=end

