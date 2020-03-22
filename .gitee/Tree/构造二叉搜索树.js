class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor (data) {
    var root = new Node(data.shift())
    data.forEach(item => {
      this.insert(root, item)
    })
    return root
  }
  insert(preNode,val) {
    if (preNode.left && preNode.val > val) {
      this.insert(preNode.left, val)
    } else if (preNode.right && preNode.val < val) {
      this.insert(preNode.right, val)
    } else if (!preNode.left && preNode.val > val) {
      preNode.left = new Node(val)
    } else if (!preNode.right && preNode.val < val) {
      preNode.right = new Node(val)
    }
  }
}

var tree = new Tree([1,3,13,2,43,62,4,10,])