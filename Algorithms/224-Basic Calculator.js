/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [];
    var result = 0;
    var number = 0;
    var sign = 1;
    for (var i = 0; i < s.length; i++) {
        char c = s.charAt(i);
        if (isNaN(c)) {
            number = 10 * number + (c - '0');
        } else if (c === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (c === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (c === '(') {
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        } else if (c === ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    if (number != 0) result += sign * number;
    return result;
};
var a = '1+(2+3)';
console.log(calculate(a));