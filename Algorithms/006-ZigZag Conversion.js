/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2 || s.length <= numRows) return s;
    var step = 0;
    var index = 0;
    var res = [];
    for (var i = 0; i < s.length; i++) {
        if (res[index] === undefined)
            res[index] = '';
        res[index] += s[i];
        if (index === 0)
            step = 1;
        else if (index === numRows - 1)
            step = -1;

        index += step;
    }
    return res.join("");
};
var a = "PAYPALISHIRINGl";
var b = 4;
console.log(convert(a, b))