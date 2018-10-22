/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) return 0;
    if (s.length === 1) return 1;
    var str;
    for (var i = 1; i < s.length; i++) {
        for (var j = i,k = s.length; j < k; j++,k--) {
            if(s[j]===s[k])
        }
    }
};
var a = "babad";
console.log(longestPalindrome(a))
Number.NaN