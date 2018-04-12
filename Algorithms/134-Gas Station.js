/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var sum = 0;
    for (var i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i];
    }
    if (sum < 0) return -1;
    var target = 0;
    var flag = 0;
    for (var i = 0; i < gas.length; i++) {
        var diff = gas[i] - cost[i];
        if (flag + diff < 0) {
            target = i + 1;
            flag = 0;
        } else {
            flag += diff;
        }
    }
    return target;
};
// var test1 = [7, -2, 1, -3, 4, -1, 2, 1, -5, 4];
// var test2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var test1 = [1, 2, 3, 3];
var test2 = [2, 1, 5, 1];
console.log(canCompleteCircuit(test1, test2));