/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort(function(a, b) { return a - b; });
    if (nums.length < 4) return [];
    var res = [];

    for (var i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (var j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            for (var k = j + 1, l = nums.length - 1; k < l;) {
                if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (k < l && nums[k] === nums[k - 1]) k++;
                    while (k < l && nums[l] === nums[l + 1]) l--;
                } else if (nums[i] + nums[j] + nums[k] + nums[l] > target) { l--; } else { k++; }
            }
        }
    }
    return res;
};
var a = [1,2,3,4,5,6,7];
var b = 0;
console.log(fourSum(a, b));