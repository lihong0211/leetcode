
/**
 * 构造一个树节点
 * @param {*} val
 */
class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}
/**
 * 根据一个数组构建二叉树
 * @param {Array} data
 */
class Tree {
  constructor (data) {
    // 零时存储所有节点，方便寻找父子节点
    let nodeList = []
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if(i > 0) {
        // 计算当前节点属于哪一层
        // let n = Math.floor(Math.sqrt(i + 1))
        let n = findFloor(i)
        // TODO: 该函数可扩展性强
        // 记录当前层到起始点
        // let q = Math.pow(2, n) - 1  可以这么用
        let q = findStartIndex(2, n)
        // 记录上一层起始点
        let p = findStartIndex(2, n - 1)
        // 找到当前节点的父节点
        let parrent = nodeList[p + Math.floor((i - q) / 2)]
        // 该节点与父节点关系 非左即右
        if (parrent.left) {
          parrent.right = node
        } else {
          parrent.left = node
        }
      }
    }
    root = nodeList[0]
    nodeList.length = 0
    console.log(root)
  }
}

/**
 * 根据index找到该节点属于那一层
 * @param {*} index 
 */
var findFloor = index => {
  if (index < 2) return index + 1
  let total = 0
  for (let i = 1; i <= index; i++) {
    total += Math.pow(2, i - 1)
    if (total >= index + 1) {
      return i
    }
  }
}

/**
 * 根据层数找到当前层开始的index
 * @param {*} n n叉数
 * @param {*} floor 层数
 */
var findStartIndex = (n, floor) => {
  let total = 0
  for (let i = 1; i < floor; i ++) {
    total += Math.pow(n, i - 1)
  }
  return total
}

var tree = new Tree([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,])
