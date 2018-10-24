/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    // var strLen = 1;
    // var str;
    var lo = 0;
    var maxLen = 1;
    // for (var i = 0; i < s.length - 1; i++) {
    //     if (s[i]&&s[i - 1] == s[i + 1]) {
    //         for (var j = i - 1, k = i + 1; j >= 0, k <= s.length - 1; j--, k++) {
    //             if (s[j] && s[k] && s[j] != s[k]) {
    //                 start = j;
    //                 end = k;
    //                 break;
    //             } else {start = i-2;end = i+2;};
    //         }
    //     }
    //     if (s.slice(start + 1, end).length >= strLen) {
    //         str = s.slice(start + 1, end);
    //         strLen = s.slice(start + 1, end).length;
    //     }
    //     if (s[i]&&s[i] == s[i + 1]) {
    //         for (var j = i - 1, k = i + 2; j >= 0, k <= s.length - 1; j--, k++) {
    //             if (s[j] && s[k] && s[j] != s[k]) {
    //                 start = j;
    //                 end = k;
    //                 break;
    //             } else {start = i-1;end = i+2;};
    //         }
    //     }
    //     if (s.slice(start + 1, end).length >= strLen) {
    //         str = s.slice(start + 1, end);
    //         strLen = s.slice(start + 1, end).length;
    //     }
    // }
    // return str
    for (var i = 0; i < s.length - 1; i++) {
        loPali(s, i, i);
        loPali(s, i, i + 1);
    }
    return s.substring(lo, lo + maxLen)

    function loPali(s, j, k) {
        while (j >= 0 && k < s.length && s[j] == s[k]) {
            j--;
            k++;
        }
        if (maxLen < k - j - 1) {
            lo = j + 1;
            maxLen = k - j - 1;
        }
    }
};

var a = "abcdedcfgh";
var b = "abcdeedcfgh";
var c = "abcdeeedcfgh";
var d = "aappaaoiu";
console.log(longestPalindrome(c))