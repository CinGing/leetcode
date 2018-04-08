/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    for (var i = prices.length - 1; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
            max = Math.max(max, prices[i] - prices[j]);
        }
    }
    return max;
};
var test1 = [7,6];
var test2 = [1, 2, 11, 5, 9, 31, 20, 3, 51, 43];
var test3 = [12, 3, 10, 11, 1];
console.log(maxProfit(test1));
console.log(maxProfit(test2));
console.log(maxProfit(test3));
