/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const res = [];
    var count = 0;
    backtrack(res, n);
    return count;

    function backtrack(res, n, board = [], r = 0) {
        if (r === n) {
            // res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
            count++;
            return;
        }
        for (var c = 0; c < n; c++) {
            if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
                board.push(c);
                backtrack(res, n, board, r + 1);
                board.pop();
            }
        }
    }
};
var a = 8;
console.log(totalNQueens(a));