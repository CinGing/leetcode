/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const mergeKList = [];
    let i = 0;
    lists.forEach(function(list) {
        let tempList = list;
        while (tempList && tempList.val != undefined) {
            mergeKList[i] = tempList.val;
            tempList = tempList.next();
            i++;
        }
    });
    return mergeKList.sort(function(a, b) { return a - b });
};