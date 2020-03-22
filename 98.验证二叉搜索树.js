/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// FIXME: 现在这个算法是右问题的，因为只将当前节点的值与左右两个孩子的值比较
// 不通过的case  [10,5,15,null,null,6,20]
// var isValidBST = function(root ) {
//   console.log(root)
//   if (!root) {
//     return true
//   } 
//   if (!root.left && !root.right) {
//     return true
//   } else if((root.left && root.val <= root.left.val) || (root.right && root.val >= root.right.val)) {
//     return false
//   }else{
//     return isValidBST(root.left) && isValidBST(root.right)
//   }
// };

// FIXME: 现在这个算法是右问题的，因为只将当前节点的值与左右两个孩子的值比较
// 不通过的case 
// 看了别人的   自己这个一坨屎
// var isValidBST = function(root, val, side ) {
//   console.log(root)
//   if (!root) {
//     return true
//   } 
//   let rootVal = val === undefined ? root.val : val
//   let rootSide
//   if (!side && root.val < rootVal) {
//     rootSide = 'left'
//   } else if (!side && root.val > rootVal) {
//     rootSide = 'right'
//   } else {
//     rootSide = side
//   }

//   if ((side && side === 'left' && root.val >= rootVal) || (side && side === 'right' && root.val <= rootVal)) {
//     return false
//   }
//   if (!root.left && !root.right) {
//     return true
//   } else if((root.left && root.val <= root.left.val) || (root.right && root.val >= root.right.val)) {
//     return false
//   }else{
//     return isValidBST(root.left, rootVal, rootSide) && isValidBST(root.right, rootVal, rootSide)
//   }
// };

// 看了别人的   自己这个一坨屎
var isValidBST = function(root) {
  
  if (!root) return true
  // 层级遍历
  var data = levelOrder(root)
  // 构造二叉搜索树
  var rightTree = new Tree(data)
  // 比较两个对象是否相等
  return isObjectValueEqual(root, rightTree)
}

// TODO: 层级遍历
const levelOrder = root => {
  if (!root) return []
  let res = [], queue = [root]
  while (queue.length) {
    let arr = [], temp = []
    while (queue.length) {
      let curr = queue.shift()
      arr.push(curr.val)
      if (curr.left) temp.push(curr.left)
      if (curr.right) temp.push(curr.right)
    }
    queue = temp
    res.push(arr)
  }
  let arr = []
  res.forEach(item => {
    arr = arr.concat(item)
  })
  return arr
}

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

function isObjectValueEqual(a, b) {
  if ((!a && b) || (!b && a)) return false 
  if (!a && !b) return true
  var aProps = a && Object.keys(a);
  var bProps = b && Object.keys(b);
   if (aProps && bProps && aProps.length != bProps.length) {
        return false;
   }
   for (var i = 0; i < aProps.length; i++) {
     var propName = aProps[i]

     var propA = a[propName]
     var propB = b[propName]
     if ((typeof (propA) === 'object')) {
       if (!isObjectValueEqual(propA, propB)) return false
     } else if (propA !== propB) {
       return false
     } else { }
   }
 return true
 }
 // 这是哪个大神写的  我直接跪下！！
 var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

// @lc code=end

