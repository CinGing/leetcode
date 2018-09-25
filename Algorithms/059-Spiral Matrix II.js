/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var rowBegin = 0,
        rowEnd = n - 1;
    var colBegin = 0,
        colEnd = n - 1;
    var res = Array(n).fill(0).map(el => Array(n).fill(0));
    var number = 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        //right
        for (var i = colBegin; i <= colEnd; i++) {
            res[rowBegin][i] = number;
            number++;
        }
        rowBegin++;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

        //down
        for (var i = rowBegin; i <= rowEnd; i++) {
            res[i][colEnd] = number;
            number++;
        }
        colEnd--;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

        //left
        if (rowBegin <= rowEnd) {
            for (var i = colEnd; i >= colBegin; i--) {
                res[rowEnd][i] = number;
                number++;
            }
        }
        rowEnd--;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);

        //up
        if (colBegin <= colEnd) {
            for (var i = rowEnd; i >= rowBegin; i--) {
                res[i][colBegin] = number;
                number++;
            }
        }
        colBegin++;
        console.log([rowBegin, rowEnd, colBegin, colEnd]);
    }
    return res;
};
var a = 4;
console.log(generateMatrix(a));