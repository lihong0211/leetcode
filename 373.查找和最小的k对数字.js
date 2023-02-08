/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

// 暴力堆--超时
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = []
  let count = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (count < k) {
        heap.push([nums1[i], nums2[j]])
        if (count === k - 1) genHeap(heap, k, 0)
      } else {
        if ((heap[0][0] + heap[0][1]) > (nums1[i] + nums2[j])) {
          heap[0] = [nums1[i], nums2[j]]
          maxHeapify(heap, k, 0)
        }
      }
      count++
    }
  }
  return heap

  function genHeap(arr, size) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      maxHeapify(arr, size, i)
    }
  }
  
  function maxHeapify(arr, size, i) {
    const l = i * 2 + 1
    const r = i * 2 + 2
    let max = i
    const val = idx => arr[idx][0] + arr[idx][1]
    if (l < size && val(l) > val(max)) {
      max = l
    }
    if (r < size && val(r) > val(max)) {
      max = r
    }
    if (max !== i) {
      [arr[max], arr[i]] = [arr[i], arr[max]]
      maxHeapify(arr, size, max)
    }
  }
};

// 手写堆
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = []
  const res = []
  const len = Math.min(nums1.length, k)
  for (let i = 0; i < len; i++) {
    heap.push([i, 0])
  }
  genHeap(heap)
  while ( res.length < k && heap.length) {
    const [i, j] = heap.shift()
    res.push([nums1[i], nums2[j]])
    if (j + 1 < nums2.length) heap.unshift([i, j + 1])
    minHeapify(heap, 0)
  }
  return res

  function genHeap (heap) {
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
      minHeapify(heap, i)
    }
  }

  function minHeapify (heap, i) {
    const l = i * 2 + 1
    const r = i * 2 + 2
    let min = i
    const size = heap.length
    const val = idx => nums1[heap[idx][0]] + nums2[heap[idx][1]]
    if (l < size && val(l) < val(min)) {
      min = l
    }
    if (r < size && val(r) < val(min)) {
      min = r
    }
    if (min !== i) {
      [heap[i], heap[min]] = [heap[min], heap[i]]
      minHeapify(heap, min)
    }
  }
};


// 内置堆
var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  // leetcode 内置API
  const pq = new MinPriorityQueue({ 
    compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) 
  });

  for (let i = 0; i < Math.min(k, nums1.length); i++) pq.enqueue([i, 0]);

  while (res.length < k && pq.size()) {
      const [i, j] = pq.dequeue();
      if (j + 1 < nums2.length) pq.enqueue([i, j + 1]);
      res.push([nums1[i], nums2[j]]);
  }

  return res;
};


// @lc code=end

