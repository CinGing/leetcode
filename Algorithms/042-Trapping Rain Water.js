/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len = height.length;
    sum = 0;
    for (var i = 1; i < len - 1; i++) {
        var left = 0,
            right = 0;
        for (var j = i; j >= 0; j--) {
            left = Math.max(left, height[j]);
        }
        for (var j = i; j < len; j++) {
            right = Math.max(right, height[j]);
        }
        sum += Math.min(left, right) - height[i];
    }
    return sum;
};
var a = [1, 2, 0, 4, 0, 3, 1, 5];
console.log(trap(a));