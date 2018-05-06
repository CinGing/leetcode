/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) return head;
    while (head != null && head.val == val) {
        head = head.next;
    }
    if (head == null) return head;

    var l = head;
    while (l.next != null) {
        if (l.next.val == val) {
            l.next = l.next.next;
        } else {
            l = l.next;
        }
    }
    return head;
};