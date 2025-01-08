/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
  let remainder = 0
  let finalNode = new ListNode(0, undefined)
  function recurse(one, two, final) {
      if (!one && !two) return finalNode;
      let oneVal = (one && one.val) || 0
      let twoVal = (two && two.val) || 0
      let sum = oneVal + twoVal

      sum += remainder
      final.val = sum % 10
      remainder = (sum - final.val) * 0.1
      final.next = new ListNode(remainder, undefined)

      if (!(one && one.next) && !(two && two.next) && remainder === 0) {
          final.next = null
      }
      return recurse((one && one.next), (two && two.next), final.next)
  }
  return recurse(l1, l2, finalNode)
};

// Looked at solution? No
// speed is relative. One submission says it beats only 36% of submissions when 5 seconds later the same code beats 80%
// thonking....