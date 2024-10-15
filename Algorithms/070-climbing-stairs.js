/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 4) return n
    let a = 1
    let b = 2
    let c = 3
    for (let i = 4; i <= n; i++) {
        a = b
        b = c
        c = a + b
    }
    return c
};

console.log(climbStairs(44))