/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//     if (digits == '') return []
//     var res = []
//     var _res = []
//     var letterArr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//     var _digits = digits.split('')
//     _digits.forEach(item => {
//         var _ = letterArr[item]
//         _res.push(_)
//     })
//     function iterStr(str1, str2, index) {
//         if (index == str1.length) {
//             res.push(str2)
//             return
//         }
//         var c = _res[index]
//         for (var i = 0; i < c.length; i++) {
//             iterStr(str1, str2 + c[i], index + 1)
//         }

//     }
//     iterStr(digits, '', 0)
//     return res
// };
var letterCombinations = function (digits) {
    const letterArr = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    var res = []
    if (digits.length == 0) return []
    if (digits.length == 1) return letterArr[digits]
    for (var i of digits) {
        res.push(letterArr[i])
    }
    var _res = res.reduce((prev, next) => {
        var v3 = []
        prev.forEach(v1 => {
            next.forEach(v2 => {
                v3.push(v1 + v2)
            })
        })
        return v3
    })
    return _res
};
console.log(letterCombinations('253'))
