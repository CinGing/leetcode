/**
 * @param {string} s
 * @return {boolean}
 */

var map = {
    "(": ")",
    "[": "]",
    "{": "}"
}
var isValid = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        }
        else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};

a = "(([[{{}]]))"
console.log(isValid(a));