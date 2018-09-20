/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    //方法一
    // var m = num1.length,
    //     n = num2.length;
    // if (m === 1 && n === 1) {
    //     return (parseInt(num1[0]) * parseInt(num2[0])).toString();
    // }
    // if (num1 === '0' || num2 === '0') return '0';
    // var pos = new Array(m + n).fill(0);
    // for (var i = m - 1; i >= 0; i--) {
    //     for (var j = n - 1; j >= 0; j--) {
    //         var mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
    //         var p1 = i + j;
    //         var p2 = i + j + 1;
    //         var sum = mul + pos[p2];

    //         pos[p1] += parseInt(sum / 10);
    //         pos[p2] = (sum) % 10;
    //     }
    // }
    // // console.log(pos);
    // var res = '';
    // for (var i = 0; i < pos.length; i++) {
    //     if (pos[0] === 0) pos.splice(0, 1);
    //     res += pos[i];
    // }
    // return res;

    //方法二
    //大数相加
    var m = num1.length;
    var n = num2.length;
    var sum = 0,
        flag = m + n - 2, //
        mul = 0;
    if (m === 1 && n === 1) {
        return (parseInt(num1[0]) * parseInt(num2[0])).toString();
    }
    if (m === '0' || n === '0') return '0';
    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            mul = parseInt(num1[i]) * parseInt(num2[j]);
            t = Math.min(flag - i - j, flag - i - j);
            mul *= Math.pow(10, t);
            sum += parseInt(mul);

            // var res = '',
            //     temp = 0;
            // sum = sum.toString().split('');
            // mul = mul.toString().split('');
            // while (sum.length || mul.length || temp) {
            //     temp += ~~sum.pop() + ~~mul.pop();
            //     res = (temp % 10) + res;
            //     temp = temp > 9;
            // }
            // sum = res.replace(/^0+/, '');
        }
    }
    return sum.toString();
};
// function sumBigNumber(a, b) {
//   var res = '',
//     temp = 0;
//   a = a.split('');
//   b = b.split('');
//   while (a.length || b.length || temp) {
//     temp += ~~a.pop() + ~~b.pop();
//     res = (temp % 10) + res;
//     temp = temp > 9;
//   }
//   return res.replace(/^0+/, '');
// }
var a = "4988253553";
var b = "840477555";
console.log(multiply(a,b))
// console.log(sumBigNumber('3782647863278468012934671', '23784678091370408971329048718239749083'));