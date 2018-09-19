/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var m = num1.length,
        n = num2.length;
    var pos = new Array(5);
    pos[0] = 1;
    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            var mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
            // console.log(mul)
            var p1 = i + j;
            var p2 = i + j + 1;
            var sum = mul + pos[p2];
            // console.log(sum)

            pos[p1] += parseInt(sum / 10);
            pos[p2] = (sum) % 10;       
        }
    }
    // console.log(pos);
    var res = '';
    for (var i = 0;i<pos.length;i++){
    	if(pos[0] === 0) pos.splice(0,1);
    	res += pos[i];
    }
    return res;
};
var a = "2";
var b = "4";
console.log(multiply(a, b));