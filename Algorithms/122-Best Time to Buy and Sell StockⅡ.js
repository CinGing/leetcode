/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var sum = 0;
    if (!prices || prices.length < 2) return 0;
    for (var i = 1; i < prices.length; i++) {
        var diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            sum += diff;
        }
    }
    return sum;
};
var test1 = [1, 4, 3, 7, 6, 7, 10];
var test2 = [1, 2, 11, 5, 9, 35, 3, 53, 34, 44];
var test3 = [12, 3, 10, 11, 1];
console.log(maxProfit(test1));
console.log(maxProfit(test2));
console.log(maxProfit(test3));
