// * @param {number} num
// * @return {string}
// */
var intToRoman = function(num) {
    var dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";
    for (var i = 0; i < dict.length; i++) {
        var a = val[i];
        if (num >= a) {
            var count = parseInt(num / a);
            num %= a;
            for (var j = 0; j < count; j++) {
                result += dict[i];
            }
        }
    }


    //     var a = num / val[i];
    //     console.log(a);
    //     for (var j = 0; j < a; i++) {
    //         result += dict[j];
    //         console.log(result);
    //     }
    //     if (a > 0) result += dict[i];
    //     num -= val[i];
    // }
    return result;
};
console.log(intToRoman(1940));