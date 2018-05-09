/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head || n <= 0) return null;
    var i = head,
        j = head;
    n++;
    while (--n) {
        j = j.next;
        if (!j) {
            return null;
        }
    }
    while (j.next) {
        i = i.next;
        j = j.next;
    }
    j = null;
    i = i.next.next;
    return i;
};