/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid == null || obstacleGrid[0][0] === 1 || obstacleGrid.length < 1) return 0;
    var wd = obstacleGrid.length;
    var lg = obstacleGrid[0].length;
    var flag = [
        [1]
    ];

    for (var j = 1; j < lg; j++) {
        if (obstacleGrid[0][j] === 1) {
            flag[0][j] = 0;
            // console.log(flag);
        } else if (flag[0][j - 1] === 1) {
            flag[0][j] = 1;
            // console.log(flag);
        } else { flag[0][j] = 0; }
    }
    // return flag
    for (var i = 1; i < wd; i++) {
        flag.push([]);
        if (obstacleGrid[i][0] === 1) {
            flag[i][0] = 0;
        } else if (flag[i - 1][0] === 1) {
            flag[i][0] = 1;
        } else { flag[i][0] = 0; }
    }
    console.log(flag)
    for (var i = 1; i < wd; i++) {
        for (var j = 1; j < lg; j++) {
            if (obstacleGrid[i][j] === 1) {
                flag[i][j] = 0;
            } else {
                flag[i][j] = flag[i][j - 1] + flag[i - 1][j];
            }
        }
    }
    console.log(flag)
    return flag[wd - 1][lg - 1];
};
var test = [
    [0, 0, 1, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0]
];
console.log(uniquePathsWithObstacles(test));