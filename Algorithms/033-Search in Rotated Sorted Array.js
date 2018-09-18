/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
        var mid = parseInt((start + end) / 2);
        if (nums[mid] === target) return mid;
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {	
                end = mid - 1;
            }
        }
    }
    return nums[start] === target ? start : -1;
};
var a = [5,1,3];
var b = 5;
console.log(search(a,b));