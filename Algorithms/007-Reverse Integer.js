/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    r = parseInt(x.toString().split("").reverse().join(""));
    return r > Math.pow(2, 31) ? 0 : r * Math.sign(x);
};
var c = 123456;
console.log(reverse(c));