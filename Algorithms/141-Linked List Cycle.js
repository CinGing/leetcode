/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //first
    // ListNode p = head;
    // ListNode pre = head;
    // while (p != null && p.next != null) {
    //   if (p.next == head) return true;
    //   p = p.next;
    //   pre.next = head;
    //   pre = p;
    // }
    // return false;

    // second
    if (head == null) return false;
    var l1 = head;
    var l2 = head;

    while (l2.next != null && l2.next.next != null) {
        l1 = l1.next;
        l2 = l2.next.next;
        if (l1 == l2) return true;
    }
    return false;
};