/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

};

class Heap {
    constructor (data) {
        this.data = data
    }

    sort () {
        let iArr = this.data
        let n = iArr.length
        if (n <= 1) {
            return iArr
        } else {
            // 从最后一个父节点开始依次构建最大堆
            for (let i = Math.floor(n / 2); i >= 0; i--) {
                Heap.maxHeapify(iArr, i, n)
            }
            for (let j = 0; j < n; j++) {
                Heap.swap(iArr, 0, n - 1 - j)
                Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
            }
        }
        return iArr
    }

    static swap (arr, a, b) {
        if (a === b) {
            return
        }
        let temp = arr[b]
        arr[b] = arr[a]
        arr[a] = temp
    }

    static maxHeapify (arr, i, size) {
        // 左节点索引
        let l = 2 * i + 1
        let r = 2 * i + 2
        let largest = i
        if (l <= size && arr[l] > arr[largest]) {
            largest = l
        }
        if (r <= size && arr[r] > arr[largest]) {
            largest = r
        }
        if (largest !== i) {
            Heap.swap(arr, i, largest)
            Heap.maxHeapify(arr, largest, size)
        }

    }
}

console.log(new Heap([1,3,6,262,23,55]).sort())

// @lc code=end

