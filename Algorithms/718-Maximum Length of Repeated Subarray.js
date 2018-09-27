/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var row = A.length - 1;
    var col = 0;
    var len = 0,
        max = 0;

    while (row >= 0) {
        var i = row,
            j = col;
        while (i >= 0 && j >= 0) {
            if (A[i] === B[j]) {
                len++;
                max = Math.max(max, len);
            } else {
                len = 0;
            }
            i--;
            j--;
        }
        len = 0;
        if (col < B.length - 1) {
            col++;
        } else {
            row--;
        }
    }





    // var len = 0,
    //     max = 0;
    // var row = 0;
    // var col = B.length - 1;
    // //计算矩阵中的每一条斜对角线上值。
    // while (row < A.length) {
    //     var i = row;
    //     var j = col;
    //     while (i < A.length && j < B.length) {
    //         if (A[i] === B[j]) {
    //             len++;
    //             max = Math.max(max, len);
    //         } else {
    //             len = 0;
    //         }
    //         i++;
    //         j++;
    //     }
    //     len = 0;
    //     if (col > 0) {
    //         col--;
    //     } else {
    //         row++;
    //     }
    // }
    return max;
};
var a = [0, 0, 0, 0, 0]
var b = [0, 0, 0, 0, 0]
console.log(findLength(a, b) + ' q ' + Date());