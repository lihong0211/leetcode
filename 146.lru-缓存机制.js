/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

// TODO: 虚拟头部尾部指针
 var LRUCache = function(capacity) {
  this.hash = {}
  this.length = 0
  this.capacity = capacity
  this.head = this.tail = {
    key: null,
    val: null,
    next: null,
    prev: null
  }
};

/** 
* @param {number} key
* @return {number}
*/

LRUCache.prototype.init = function(key, value) {
  this.head.key = this.tail.key = key
  this.head.val = this.tail.val = value
  this.hash[key] = this.head
}

LRUCache.prototype.removeHead = function() {
  // console.log(this.head, 111, this.hash)

  this.head = this.head.next
  delete this.hash[this.head.prev.key]
  this.head.prev  = null
  this.length--
}

LRUCache.prototype.moveToTail = function(key) {
  if (this.length < 2 || this.hash[key] === this.tail) return
  if (this.hash[key].prev && this.hash[key].next) {
    this.hash[key].next.prev = this.hash[key].prev
    this.hash[key].prev.next = this.hash[key].next
    this.hash[key].prev = this.tail
    this.hash[key].next = null
    this.tail = this.hash[key]
  } else if (this.hash[key] === this.head) {
    const next = this.head.next
    this.tail.next = this.head
    this.head.prev = this.tail
    this.tail = this.tail.next
    this.tail.next = null
    if (key === 2) {
      console.log(this.head, 'head')
      console.log(next, 'next')
    }
    this.head = next
    this.head.prev = null
  }
  // console.log(this.hash, key)
}

LRUCache.prototype.addToTail = function(key, value) {
  this.hash[key] = {
    key: key,
    val: value,
    prev: null,
    next: null
  }

  this.tail.next = this.hash[key]
  this.hash[key].prev = this.tail
  this.tail = this.hash[key]
  this.length++
}

LRUCache.prototype.get = function(key) {
  if (this.hash[key]) {
    if (this.capacity > 1) this.moveToTail(key)
    return this.tail.val
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (!this.length) {
    this.init(key, value)
    this.length++
  } else if (this.hash[key]) {
    this.moveToTail(key)
    this.tail.val = value
  } else {
    if (this.capacity === 1) {
      delete this.hash[this.head.key]
      this.init(key, value)
      return
    }
    if (this.length === this.capacity) {
      this.removeHead()
    }
    this.addToTail (key, value)
  }
  // if (key === 4) {
  //   console.log(this.hash)
  // }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

