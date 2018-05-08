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
var addTwoNumbers = function(l1, l2) {
	ListNode l3;
	var a = 0;
	while(l1||l2||a){
		var sum = (l1?l1.val:0)+(l2?l2.val:0)+a;
		a = sum/10;
		l3->l3.next;
		l1=l1?l1.next:l1;
		l2=l2?l2.next:l2;
	}
	return l3.next;
};