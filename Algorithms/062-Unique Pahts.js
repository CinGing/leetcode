/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var arr = [
        [1]
    ];
    if (m === 0 || n === 0) return 0;
    for (var i = 1; i < n; i++) {
        arr[0][i] = 1;
    }
    for (var j = 1; j < m; j++) {
        arr.push([]);
        arr[j][0] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    console.log(arr);
    return arr[m - 1][n - 1];

};
let [m, n] = [4, 5]
console.log(uniquePaths(m, n))