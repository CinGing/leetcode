/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	// if(s.length==0) return 0
    s = s.split(' ')
    // console.log(s[2]);
    
    // var count = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] !== '') return s[i].length;
    }
    return 0;
};
var a = "a b"
console.log(lengthOfLastWord(a))