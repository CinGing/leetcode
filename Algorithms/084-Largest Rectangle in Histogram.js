/**
 * @param {number[]} heights
 * @return {number}
 */
//木桶效应，left 和 right 间找到最短的那个 延伸到最左和最右即为最大矩形
var largestRectangleArea = function(heights) {
    var len = heights.length,
        allMin = 1,
        result = 0;
    for (var i = 0; i < len; i++) {
        allMin = Math.min(heights[i], allMin);
    }
    for (var left = 0; left < len; left++) {
        var right = left + 1,
            min = heights[left],
            max = len * allMin;
        for (var right; right < len && heights[left] != 0 && heights[right] != 0; right++) {
            min = Math.min(min, heights[right]);
            max = Math.max(min * (right - left + 1), max);
        }
        result = Math.max(result, max);
    }
    return result;
};
var a = [2, 1, 0, 2, 3, 1];
console.log(largestRectangleArea(a));