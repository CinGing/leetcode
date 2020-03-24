/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//     if (n == 0) return []
//     if (n == 1) return ['()']
//     let res = []
//     DFS(res, '', 0, 0, n)
//     return res
// };
// function DFS(res, str, left, right, n) {
//     if (left > n || right > n || right > left) return
//     if (left == right && right == n) {
//         res.push(str)
//         return
//     }
//     DFS(res, str + '(', left + 1, right, n)
//     DFS(res, str + ')', left, right + 1, n)
//     return
// }
// var generateParenthesis = function (n) {
//     let ret = ['(']
//     let restCnts = [n - 1] // 记录每个结果剩余的(个数
//     let allClean = false
//     while (!allClean) {
//         let tmpRet = []
//         let tmpRestCnts = []
//         allClean = true
//         ret.forEach((item, index) => {
//             let restCnt = restCnts[index]
//             if (restCnt === 0) {
//                 tmpRestCnts.push(0)
//                 if (item.length === n * 2) {
//                     tmpRet.push(item)
//                 } else {
//                     tmpRet.push(item + ')')
//                     allClean = false
//                 }
//             } else {
//                 tmpRet.push(item + '(')
//                 tmpRestCnts.push(restCnt - 1)
//                 let leftCnt = n - restCnt
//                 if (item.length - leftCnt < leftCnt) {
//                     tmpRet.push(item + ')')
//                     tmpRestCnts.push(restCnt)
//                 }
//                 allClean = false
//             }
//         })
//         ret = tmpRet
//         restCnts = tmpRestCnts
//     }
//     return ret
// }
// var generateParenthesis = function (n) {
//     if (n == 0) return []
//     if (n == 1) return ['()']
//     let res = []
//     let temp = ['(']
//     let tempArr = [] //检测temp中 '(' 
//     temp.forEach((item, index) => {
//         item + '('
//         item + ')'
//         if (item.length == 2 * n) {

//         }
//     })
// };
console.log(generateParenthesis(3))