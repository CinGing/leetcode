/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
        // if (target > nums[nums.length - 1]) {
        //     return nums.length;
        // }
    }
    return nums.length; //best
};

var test = [1, 3, 5, 6];
console.log(searchInsert(test,3));
console.log(test);
