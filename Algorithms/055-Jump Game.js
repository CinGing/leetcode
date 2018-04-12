/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }
    return max >= nums.length

};
var test = [2, 3, 0, 1, 0, 4];
console.log(canJump(test));