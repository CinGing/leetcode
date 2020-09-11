/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //方法一:
    // s = s.split('');
    // var arr = new Array(75);
    // if (s.length == 1) return 1;
    // var max = 0;
    // for (var i = 0; i < s.length; i++) {
    //     for (var j = i; j < s.length; j++) {
    //         if (arr[s[j].charCodeAt() - 48]) {
    //             count = j - i;
    //             max = Math.max(max, count);
    //             break;
    //         }
    //         arr[s[j].charCodeAt() - 48] = s[j];
    //     }
    //     max = Math.max(max, j-i);
    //     if(max>=(s.length-i)) return max;
    //     arr = new Array(75);
    // }
    // return max;

    //方法二:
    // if (!s || s.length == 0) return 0;
    // if (s.length == 1) return 1;
    // var maxLen = 1;
    // var start = 0;
    // for (var i = 1; i < s.length; i++) {
    //     var c = s[i];
    //     var j = s.substring(start, i).indexOf(c)
    //     if (j >= 0) {
    //         start += j + 1;
    //     } else {
    //         maxLen = Math.max(maxLen, i - start + 1)
    //     }
    // }
    // return maxLen;

    // 方法三:
    // var maxLen = 0
    for (var i = 0; i < s.length; i++) {
        var hash = {}
        hash[s[i]] = i
        if (hash[s[i + 1]]) {

        }
    }
};
var a = "abcdbca";
console.log(lengthOfLongestSubstring(a));