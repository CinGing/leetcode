/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    var head = min = max = 0;
    var end = len - 1;
    while (head < end) {
        min = Math.min(height[head], height[end]);
        max = Math.max(max, min * (end - head));
        if (height[head] < height[end]) head++;
        else end--;
    }
    return max
};
var a = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(a));