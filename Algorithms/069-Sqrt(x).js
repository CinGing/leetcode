/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // var low = 0, high = x, mid;
    // if (x < 2) return x;
    // while (low < high) {
    // 	mid = (low + high) / 2;
    // 	if (x/mid >= mid) low = mid+1;
    // 	else high = mid;
    // 	console.log(mid);
    // }
    // return high - 1;
    if (x == 0) return 0;
	var i = x;
	while(i > x / i)  
		i = (i + x / i) / 2;	    	
	return parseInt(i);
};
console.log(mySqrt(120));