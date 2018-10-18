/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s = s.split('');
    console.log(s);
    var max = 0;
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            for (var k = j + 1; j < s.length; j++) {
                if (s[k] && s[k] == s[j]) {
                    count = j - i + 1;
                    // max = Math.max(count, max);
                }
            }
        }
        // for (var j = 0 j < s.length; j++) {
        //     if (s[j] == s[i]) {
        //         count = j - i + 1;
        //         max = Math.max(count, max);
        //         break;
        //     }
        // }
        // console.log(max);
    }
    return max;
};
var a = "pwwkew";
console.log(lengthOfLongestSubstring(a));