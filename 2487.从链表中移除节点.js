var removeNodes = function (head) {
  if (!head || !head.next) return head
  const node = removeNodes(head.next)
  if (node.val > head.val) return node
  head.next = node
  return head
}