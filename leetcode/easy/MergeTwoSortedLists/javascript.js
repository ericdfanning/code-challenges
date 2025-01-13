/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(nodeOne, nodeTwo) {
  if (!nodeOne && !nodeTwo) return null
  let finalNode = new ListNode();
 
  function loop(nodeOne, nodeTwo, buildNode) {
      if (nodeOne === null && nodeTwo === null) {
          return buildNode
      }
      if (nodeOne === null && nodeTwo) {
          buildNode.val = nodeTwo.val;
          buildNode.next = nodeTwo.next ? new ListNode(): null;
          return loop(null, nodeTwo.next, buildNode.next);
      }
      if (nodeTwo === null && nodeOne) {
          buildNode.val = nodeOne.val;
          buildNode.next = nodeOne.next ? new ListNode(): null;
          return loop(nodeOne.next, null, buildNode.next); 
      }
      if (nodeOne.val === nodeTwo.val) {
          buildNode.val = nodeOne.val;
          buildNode.next = new ListNode(nodeTwo.val);
          
          buildNode.next.next = nodeOne.next || nodeTwo.next ? new ListNode(): null;
          return loop(nodeOne.next, nodeTwo.next, buildNode.next.next);
      } else if (nodeOne.val < nodeTwo.val) {
          buildNode.val = nodeOne.val;
          buildNode.next = new ListNode();
          return loop(nodeOne.next, nodeTwo, buildNode.next);
      } else if (nodeOne.val > nodeTwo.val) {
          buildNode.val = nodeTwo.val;
          buildNode.next = new ListNode();
          return loop(nodeOne, nodeTwo.next, buildNode.next);
      }
  }
 
  loop(nodeOne, nodeTwo, finalNode)
  return finalNode;
};