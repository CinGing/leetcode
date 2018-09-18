/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len = nums.length;
    var arry = [];
    if (len < 3) return 0;
    nums = nums.sort(function(a, b) { return a - b })
    for (var i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            return arry;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = len - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                arry.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return arry;
};
var a = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(a));