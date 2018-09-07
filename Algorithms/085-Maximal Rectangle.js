/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let lg = matrix.length;
    let wd = matrix[0].length;
    if (lg === 0) return 0;
    const array = new Array(lg).fill(0);

    let max = 0;
    for (var j = 0; j < wd; j++) {
        for (var i = 0; i < lg; i++) {
            if (matrix[i][j] === "1") array[i]++;
            else array[i] = 0;
        }
        console.log(array);
        for (var i = 0; i < lg; i++) {
            var left = i - 1;
            while (left >= 0 && array[i] <= array[left]) left--;
            var right = i + 1;
            while (right < lg && array[i] <= array[right]) right++;
            max = Math.max(max, array[i] * (right - left - 1));
        }
    }
    return max;
}
var a = [
    ["1", "0", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "0", "1", "1"],
    ["1", "1", "1", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "1", "1", "1"]
]
console.log(maximalRectangle(a));