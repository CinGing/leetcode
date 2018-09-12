/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var len = grid.length;
    var wid = grid[0].length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < wid; j++) {
            if (i === 0 && j != 0) {
                grid[i][j] = grid[i][j - 1] + grid[i][j];
            } else if (i != 0 && j === 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j];
            } else if (i === 0 && j === 0) {
                grid[i][j] = grid[i][j];
            } else if (i != 0 && j != 0) {
                grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
            }
        }
        console.log(grid);
    }
    return grid[len - 1][wid - 1];
};
var a = [
    [1, 3, 1, 2],
    [1, 5, 3, 6],
    [5, 1, 1, 3]
];
console.log(minPathSum(a));