/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start

var AllOne = function() {
  this.hash = {}
  this.head = new ListNode()
  this.tail = new ListNode()
  this.head.next = this.tail
  this.tail.prev = this.head
};

/** 
* @param {string} key
* @return {void}
*/
AllOne.prototype.inc = function(key) {
  if (key in this.hash) {
     this.hash[key].set.delete(key)
     const oldNode = this.hash[key]
     const isEmpty = this.hash[key].set.size === 0
     const cnt = this.hash[key].cnt
     if (cnt + 1 === this.hash[key].prev.cnt) {
         this.hash[key].prev.set.add(key)
         this.hash[key] = this.hash[key].prev
     } else {
         const node = new ListNode(cnt + 1)
         node.set.add(key)
         node.prev = this.hash[key].prev
         this.hash[key].prev.next = node
         node.next = this.hash[key]
         this.hash[key].prev = node
         this.hash[key] = node
     }
     if (isEmpty) {
         oldNode.prev.next =  oldNode.next
         oldNode.next.prev = oldNode.prev
     }
  } else {
      if (this.tail.prev.cnt === 1) {
          this.tail.prev.set.add(key)
          this.hash[key] = this.tail.prev
      } else {
          const node = new ListNode(1)
          node.set.add(key)
          this.tail.prev.next = node
          node.prev = this.tail.prev
          node.next = this.tail
          this.tail.prev = node
          this.hash[key] = node
      }
  }
};

/** 
* @param {string} key
* @return {void}
*/
AllOne.prototype.dec = function(key) {
  this.hash[key].set.delete(key)
  const oldNode = this.hash[key]
  const isEmpty = this.hash[key].set.size === 0
  const cnt = this.hash[key].cnt
  if (cnt - 1 === this.hash[key].next.cnt) {
      this.hash[key].next.set.add(key)
      this.hash[key] = this.hash[key].next
  } else if (cnt - 1 > 0) {
      const node = new ListNode(cnt - 1)
      node.set.add(key)
      node.next = this.hash[key].next
      this.hash[key].next.prev = node
      this.hash[key].next = node
      node.prev = this.hash[key]
      this.hash[key] = node
  } else if (cnt === 1) {
      delete this.hash[key]
  }
  if (isEmpty) {
      oldNode.prev.next =  oldNode.next
      oldNode.next.prev = oldNode.prev
  }
};

/**
* @return {string}
*/
AllOne.prototype.getMaxKey = function() {
  return [...this.head.next.set.keys()][0] || ''
};

/**
* @return {string}
*/
AllOne.prototype.getMinKey = function() {
  return [...this.tail.prev.set.keys()][0]|| ''
};

function ListNode (cnt) {
  this.cnt = cnt
  this.prev = null
  this.next = null
  this.set = new Set()
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end

