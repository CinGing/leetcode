/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result = target;
    var len = nums.length;
    nums = nums.sort(function(a, b) {
        return a - b
    })
    if (len < 3) return 0;
    var min = Math.abs(nums[0] + nums[1] + nums[2] - target);
    for (var i = 0; i < len - 2; i++) {
        for (var j = i + 1; j < len - 1; j++) {
            for (var k = j + 1; k < len; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    return target;
                if (min === Math.abs(nums[i] + nums[j] + nums[k] - target))
                    result = nums[i] + nums[j] + nums[k];
            }
        }
    }
    return result;
};
var a = [1,1,-1,-1,3];
var target = 1;
console.log(threeSumClosest(a, target));

/*
O(n^2)
var threeSumClosest = function(nums, target) {
    var result = nums[0] + nums[1] + nums[2];
    var len = nums.length;
    nums = nums.sort(function(a, b) {
        return a - b
    })
    if (len < 3) return 0;
    for (var i = 0; i < len - 2; i++) {
        var start = i + 1,
            end = len - 1;
        while (start < end) {
            var sum = nums[i] + nums[start] + nums[end];
            if (nums[i] + nums[start] + nums[end] > target) {
                end--;
            } else {
            	start++;
            }
            if (Math.abs(sum - target) < Math.abs(result - target))
                result = sum;
        }
    }
    return result;
};
*/