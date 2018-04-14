/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // console.log(s.charAt(6));
    var sum = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        var c = s.charAt(i);
        // console.log(c);
        switch (c) {
            case 'I':
                sum += (sum >= 5 ? -1 : 1);
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                sum += 10 * (sum >= 50 ? -1 : 1);
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                sum += 100 * (sum >= 500 ? -1 : 1);
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
        }
    }
    return sum;
};
var s = 'MCMDCD';
console.log(romanToInt(s));