/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var l1 = headA;
    var l2 = headB;
    if (l1 == null || l2 == null) return null;
    while (l1 != l2) {
        l1 = l1 == null ? headB : l1.next;
        l2 = l2 == null ? headA : l2.next;
    }
    return l1;
};