/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    var INT_MAX = 0x7FFFFFFF;
    var INT_MIN = 1 << 31;
    var flag = false
    if (dividend == 0) return 0
    if (dividend < 0 && divisor < 0 || dividend > 0 && divisor > 0) flag = true
    dividend = dividend < 0 ? -dividend : dividend
    divisor = divisor < 0 ? -divisor : divisor
    if (dividend < divisor) return 0
    var res = div(dividend, divisor)
    if (flag == true) {
        return res > INT_MAX ? INT_MAX : res
    } else {
        return -res < INT_MIN ? INT_MIN : -res
    }
    function div(dividend, divisor) {
        if (dividend < divisor) return 0
        var _res = 1
        var b = divisor
        while (dividend - b >= b) {
            _res += _res
            b += b
        }
        return _res + div(dividend - b, divisor)
    }
};
console.log(divide(10, 2))