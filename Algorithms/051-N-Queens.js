/**
 * @param {number} n
 * @return {string[][]}
 */

/*
*方法一：
*
var solveNQueens = function(l, r, m, n, i, j) {
    return j ? i 
    ? solveNQueens(l,r,m,n,i & i-1, 1) + solveNQueens((l | i & -i) * 2, (r | i & -i) / 2, m | i & -i,n,0,0):0 
    : m == n ? 1 : solveNQueens(l, r, m, n, ~(l | r | m) & n, 1);
};
var n = 8;
console.log(solveNQueens(0, 0, 0, (1 << n) - 1, 0, 0));
solveNQueens();
*/




//方法二:
// var solveNQueens = function(n) {
//     const res = [];
//     backtrack(res, n);
//     return res;

//     function backtrack(res, n, board = [], r = 0) {
//         if (r === n) {
//             res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
//             return;
//         }
//         for (let c = 0; c < n; c++) {
//             if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
//                 board.push(c);
//                 backtrack(res, n, board, r + 1);
//                 board.pop();
//             }
//         }
//     }
// };

// 方法三：
var solveNQueens = function(n) {
    
};