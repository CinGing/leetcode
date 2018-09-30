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
var detectCycle = function(head) {
    // if (head === null || head.next === null) return null;
    // var l1 = head;
    // var l2 = head;

    // var isCycle = false;

    // while (l2.next != null && l2.next.next != null) {
    //     l1 = l1.next;
    //     l2 = l2.next.next;
    //     if(l1 === l2) {isCycle = true;break;}
    // }
    // if(!isCycle) return null;
    // l1 = head;
    // while(l1 != l2) {
    // 	l1 = l1.next;
    // 	l2 = l2.next;
    // }
    // return l1;
    if (head === null || head.next === null) return null;
    var l1 = head;
    var l2 = head;

    while (l2.next && l2.next.next) {
        l1 = l1.next;
        l2 = l2.next.next;
        if (l1 === l2) {
            l1 = head;
            while (l1 != l2) {
                l1 = l1.next;
                l2 = l2.next;
            }
            return l1;
        }
    }

    return null;
};