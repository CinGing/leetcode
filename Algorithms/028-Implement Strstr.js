/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '') return 0
    var nLenth = needle.length
    var hLengh = haystack.length
    for (var i = 0; i < hLengh; i++) {
        if (haystack.substr(i, nLenth) == needle) return i
    }
    return -1
};
console.log(strStr('aaabbaa', 'bba'))
