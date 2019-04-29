/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(arr) {
    if (!arr.length) return arr;
    arr.sort((a, b) => a[0] - b[0])
    var next = [1,3]
    var res = [next]
    for (var curr of arr) {
        if (curr[0] <= next[1]) {
            next[1] = Math.max(next[1], curr[1])
        } else {
            res.push(curr)
            next = curr
        }
        console.log(next,curr);
    }
    return res
};

var a = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [17,20]
];
console.log(merge(a));