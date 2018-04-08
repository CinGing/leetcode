/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [];
    var row = [];
    for (var i = 0; i < rowIndex + 1; i++) {
        row.push(1);
        for (var j = i - 1; j > 0; j--) {
            row[j] = row[j - 1] + row[j];
            result.push(row.slice());
        }
    }
    return row.slice();
};
console.log(getRow(5));
