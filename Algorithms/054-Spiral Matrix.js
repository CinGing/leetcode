/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = [];
    var row = matrix.length;
    var col = matrix[0].length;
    var rowBegin = 0,
        rowEnd = row - 1;
    var colBegin = 0,
        colEnd = col - 1;

    if (row === 0 || col === 0) return res;
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        //right
        for (var i = colBegin; i <= colEnd; i++) {
            res.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

        //down
        for (var i = rowBegin; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd]);
        }
        colEnd--;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

        //left
        if (rowBegin <= rowEnd) {
            for (var i = colEnd; i >= colBegin; i--) {
                res.push(matrix[rowEnd][i])
            }
        }
        rowEnd--;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

        //up
        if (colBegin <= colEnd) {
            for (var i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin])
            }
        }
        colBegin++;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

    }
    // console.log()
    return res;

};
var a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
];
console.log(spiralOrder(a));