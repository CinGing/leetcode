/**
 * @param {string} str
 * @return {number}
 */
// 此题描述有问题 c不能ac
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, Math.pow(2, 31)-1), -Math.pow(2, 31));
};
var a = "     +4193 with words";
var C = "     +   4193 with words";
console.log(myAtoi(a));