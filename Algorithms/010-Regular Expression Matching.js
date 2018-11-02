/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // if (s == null || p == null) {
    //     return false;
    // }

    // //二维数组
    // var dp = new Array(); 
    // for (var i = 0; i < s.length+1; i++) { 
    //     dp[i] = new Array();
    // }

    
    // dp[0][0] = true;
    // for (var i = 0; i < p.length; i++) {
    //     if (p[i] == '*' && dp[0][i - 1]) {
    //         dp[0][i + 1] = true;
    //     }
    // }
    // // console.log(dp[5][5])
    // for (var i = 0; i < s.length; i++) {
    //     for (var j = 0; j < p.length; j++) {
    //         if (p[j] == '.') {
    //             dp[i + 1][j + 1] = dp[i][j];
    //         }
    //         if (p[j] == s[i]) {
    //             dp[i + 1][j + 1] = dp[i][j];
    //         }
    //         if (p[j] == '*') {
    //             if (p[j-1] != s[i] && p[j-1] != '.') {
    //                 dp[i + 1][j + 1] = dp[i + 1][j - 1];
    //             } else {
    //                 dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
    //             }
    //         }
    //     }
    // }
    // return dp[s.length][p.length]!=undefined;
    return new RegExp("^"+p+"$").test(s)
};
var s = "mississippi"
var p = "mis*is*ip*."
console.log(isMatch(s,p))