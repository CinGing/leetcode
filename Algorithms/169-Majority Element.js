/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums[parseInt(nums.sort().length/2)];
};
var a = [1,2,1,2,1,2,1,2,2];
console.log(majorityElement(a));