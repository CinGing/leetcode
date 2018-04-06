/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);

    return digits;
};

var test1 = [9, 9, 9, 9, 9];
var test2 = [1, 9, 8, 9];
var test3 = [1, 9, 0, 5];
console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));
