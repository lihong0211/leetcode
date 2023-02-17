/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

function LinkListNode (val = null) {
  this.val = val
  this.prev = null
  this.next = null
}

var MyLinkedList = function() {
  this.size = 0
  this.head = new LinkListNode()
  this.tail = new LinkListNode()
  this.head.next = this.tail
  this.tail.prev = this.head
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let p = this.head
  while (index >= 0 && p.next) {
    p = p.next
    index--
  }
  return p.next ? p.val : -1
};

MyLinkedList.prototype.find = function(index) {
  let p = this.head
  while (index >= 0) {
    p = p.next
    index--
  }
  return p
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return
  const cur = this.find(index)
  const node = new LinkListNode(val)

  node.prev = cur.prev
  cur.prev.next = node
  node.next = cur
  cur.prev = node

  this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size) return
  const cur = this.find(index)

  cur.prev.next = cur.next
  cur.next.prev = cur.prev
  
  this.size--
};


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

