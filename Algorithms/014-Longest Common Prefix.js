/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return "";
    var pre = strs[0];
    var i = 1;
    while (i < strs.length) {
        while (strs[i].indexOf(pre) != 0)
            pre = pre.substring(0, pre.length - 1);
        i++;
    }
    return pre;
};
var a = ["flower", "flow", "flight", "fl"];
console.log(longestCommonPrefix(a))
