/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function(p, q) {
    var queue1 = [];
    var queue2 = [];

    queue1.push(p);
    queue2.push(q);

    while (queue1.length && queue2.length) {
        var node1 = queue1.shift();
        var node2 = queue2.shift();
        var val1;
        var val2;


        if (node1 === null) {
            val1 = null;
        } else {
            val1 = node1.val;
            queue1.push(node1.left);
            queue1.push(node1.right);
        }

        if (node2 === null) {
            val2 = null;
        } else {
            val2 = node2.val;
            queue2.push(node2.left);
            queue2.push(node2.right);
        }

        if (val1 !== val2) {
            return false;
        }
    }

    return queue1.length === queue2.length;
};

console.log(isSameTree(p,q));

var node1 = TreeNode(1);
var node1 = TreeNode(3);
var node1 = TreeNode(5);

// function ListNode(x){
//     this.val = x;
//     this.next = null;
// };
// function List() {
//   this.head = null;
//   this.insert = function (node) {
//     var oldHead = this.head;
//     this.head = node;
//     this.head.next = oldHead;
//   };
// };

// function printListFromTailToHead(head){
//     // write code here
//     var res = [];
//     while(head){
//        res.unshift(head.val);
//        head = head.next;
//     }
//     return res
// };

// var list = new List();
// var node1 = new ListNode(1);
// var node2 = new ListNode(2);
// var node3 = new ListNode(3);

// list.head = node1;
// list.insert(node2);
// list.insert(node3);
// var result = printListFromTailToHead(list.head)
// console.log(result);