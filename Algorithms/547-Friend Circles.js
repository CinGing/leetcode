/**
 * @param {number[][]} M
 * @return {number}
 */
// var parent = []
// var findCircleNum = function (M) {
//   parent = new Array(M.length);
//   parent.fill(-1);
//   for (var i = 0; i < M.length; i++) {
//     for (var j = i + 1; j < M.length; j++) {
//       if (M[i][j] == 1) {
//         union(parent, i, j);
//       }
//     }
//   }
//   var count = 0;
//   for (var i = 0; i < parent.length; i++) {
//     if (parent[i] == -1)
//       count++;
//   }
//   return count;
// };

// function find(i) {
//   if (parent[i] == -1)
//     return i;
//   return parent[i] = find(parent[i]);
// }
// function union(parent, x, y) {
//   var xset = find(x);
//   var yset = find(y);
//   if (xset != yset)
//     parent[xset] = yset;
// }


function findCircleNum(M) {
  var count = 0
  var m = M.length
  var flag = false
  for (var i = M.length - 1; i >= 0; i--) {
    flag = false
    for (var j = 0; j < i; j++) {
      if (M[i][j] == 1) {
        if (M[i][j - 1] && M[i][j - 1] == 1) {
          flag = true
          break
        }
      }
    }
    if (flag) {
      count++
    }
  }
  return count
}
console.log(findCircleNum([
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1]]))