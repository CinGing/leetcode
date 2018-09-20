/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (hash[num] != undefined) {
            return [hash[num], i]
        } else {
            hash[target - num] = i
        }

    }

    return []
};

var number = [3, 2, 4, 5, 7, 6];
var result = twoSum(number, 8);
console.log(result.toString());

var a = 0;
switch (a) {
    case 0:
        a = 4;
    case 1:
        a = 2;
    case 2:
        a = 3;
    case 3:
    a = 7;break;
    default:
    a = 5

}
console.log(a);