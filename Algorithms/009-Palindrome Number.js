/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // if (x < 0) return false;
    // if (x >= 0 && x < 10 || x == 11) return true;
    // var s = x.toString();
    // for(var i = 0;i<s.length/2;++i){
    // 	if(s[i]!=s[s.length-i-1])return false;
    // }
    // return true;

    if (x < 0) return false;
    if (x >= 0 && x < 10 || x == 11) return true;
    var arr=[];
    var count = 1;
    while(x>0){
    	var rem = x%Math.pow(10,count)
    	arr.push(rem/Math.pow(10,count-1));
    	x = x - rem;
    	count++;
    }
    for(var i = 0;i<arr.length/2;++i){
    	if(arr[i]!=arr[arr.length-i-1])return false;
    }
    return true;
};
var a = 1111165
console.log(isPalindrome(a))