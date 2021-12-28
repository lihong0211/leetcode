/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

// 这个题如果不用两个虚拟头部尾部节点 边界条件直接弄死人
class LinkListNode {
  constructor (key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor (capacity) {
    this.hash = {}
    this.length = 0
    this.capacity = capacity
    this.head = new LinkListNode()
    this.tail = new LinkListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get (key) {
    const node = this.hash[key]
    if (node) {
      this.moveTotail(node)
      return node.val
    }
    return -1
  }

  put (key, val) {
    let node = this.hash[key]
    if (node) {
      node.val = val
      this.moveTotail(node)
    } else {
      node = new LinkListNode (key, val)
      node.val = val
      this.addToTail(node)
      this.hash[key] = node
      this.length++
      if (this.length > this.capacity) {
        const key = this.removeHead()
        delete this.hash[key]
        this.length--
      }
    }
  }

  moveTotail (node) {
    this.removeFromList(node)
    this.addToTail(node)
  }

  removeFromList (node) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
  }

  addToTail (node) {
    const prev = this.tail.prev
    prev.next = node
    node.prev = prev
    node.next = this.tail
    this.tail.prev = node
  }

  removeHead () {
    const node = this.head.next
    this.removeFromList(node)
    return node.key
  }
};
// @lc code=end

