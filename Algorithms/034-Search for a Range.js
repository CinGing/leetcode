/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //first
    var result = [-1, -1];
    var start = -1;
    var end = 0;
    if (target < nums[0] || target > nums[nums.length - 1]) return result;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {start = i; end = i;break; }
        // console.log(start);
    }
    // start = end;
    while(nums[end]===target) end++;
    return [start,end-1]

    //second

    // var low = 0,
    //     high = nums.length - 1,
    //     mid;
    // while (nums[]=low < high) {
    //     mid = (nums[]=low + high) / 2;
    //     if (mid < target) { nums[]=low = mid; }
    //     if (mid > target) { high = mid; }
    //     if (mid === target) { break; }
    // }
    // if (mid != target) { return result; }
    // return mid;
};
var a = [1, 4, 5, 5, 5, 9, 10, 20]
console.log(searchRange(a, 9))