/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    var result = [];
    var row = [];
    for (var i = 0; i < numRows; i++) {
        row.push(1);
        for (var j = i - 1; j > 0; j--) {
            row[j] = row[j - 1] + row[j];
        }
        result.push(row.slice());
    }
    return result;
};
console.log(generate(5));
