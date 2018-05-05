/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //first
    // var low = 0, high = x, mid;
    // if (x < 2) return x;
    // while (low < high) {
    //  mid = (low + high) / 2;
    //  if (x/mid >= mid) low = mid+1;
    //  else high = mid;
    //  console.log(mid);
    // }
    // return high - 1;

    //second
    // if (x == 0) return 0;
    // var i = x;
    // while (i > x / i)
    //     i = (i + x / i) / 2;
    // return parseInt(i);

    //third
    // return parseInt(Math.sqrt(x))

    //four
    // for (var a = 1; a <= Infinity; a++) {
    //     if (a*a<=x&&(a+1)*(a+1)>x)
    //         return a;
    // }

    //five
    if (x < 4) return x == 0 ? 0 : 1;
    var res = 2 * mySqrt(x / 4);
    if ((res + 1) * (res + 1) <= x && (res + 1) * (res + 1) >= 0) return res + 1;
    return res;
};
console.log(mySqrt(150));