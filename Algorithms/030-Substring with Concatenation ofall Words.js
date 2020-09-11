/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var needMap = {}, res = []
    var sLen = s.length
    var wLen = words.length
    var w0Len = words[0].length
    var allLen = wLen * w0Len
    if (wLen == 0 || allLen > sLen) return []
    for (var i of words) {
        needMap[i] ? needMap[i]++ : needMap[i] = 1
    }
    for (var i = 0; i < sLen - wLen + 1; i++) {
        let nm = Object.assign({}, needMap);
        for (var j = i; j <= sLen - allLen; j += w0Len) {
            let k = s.slice(j, j + wLen)
            if (nm[k]) {
                nm[k]--
            } else {
                break
            }
        }
        if (Object.values(nm).every(n => n === 0)) res.push(i)
    }
    return res
};
console.log(findSubstring('sass', ['a', 'b', 'a']))