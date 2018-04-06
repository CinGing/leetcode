/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var flag = nums[0]; //store max
    for (var i = 1; i < nums.length; i++) {
        max = ((max + nums[i]) >= nums[i]) ? (max + nums[i]) : nums[i];
        flag = Math.max(max, flag);

    }
    return flag;
};

var test = [7, -2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(test));
