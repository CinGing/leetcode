/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) return head;

    var res = null;
    while (head) {
        var l1 = head.next;
        head.next = res;
        res = head;
        head = l1;
    }
    return res;
};