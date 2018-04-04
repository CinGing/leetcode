/**
 * @param {number[]} nums
 * @return {number}
 */

//first
//shit, I thank it is an unsorted array

var removeDuplicates = function(nums) {
    var flag = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1])
            nums[flag++] = nums[i]
    }
    nums.splice(flag, nums.length - flag);
    return flag;
};
var test = [1, 1, 2, 3, 3, 3, 4, 4, 5];
console.log(removeDuplicates(test));
console.log(test);
