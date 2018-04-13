/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) return 1;
    var count = 0;
    var flag = 0;
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === flag) {
            count++;
            flag = max;
        }
    }
    return count;
    // max = Math.max(flag, max);
}
var test = [3, 1, 5, 1, 1, 4, 1, 3, 1, 4];
console.log(jump(test));