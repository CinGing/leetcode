/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(s) {
	var number = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if(!isNaN(c)) {
        // 	number = number*10 + Number(c - '');
        // }else if (c === '+') {
        // 	number = '-';
        c = c*10 + Number(c - '0')
        }
        console.log(c);
    }
};
var a = ' 1 + 1 ';
console.log(deleteNode(a));