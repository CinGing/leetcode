/*
三个瓶盖换一瓶水,2个空瓶换一瓶水,不可赊账
 */
var sum = function(num) {
    var count = num;
    var pg = num;
    var kp = num;
    num = 0;
    back(0, pg, kp);
    return count;


    function back(num, pg, kp) {
        var num1 = parseInt(pg / 3);
        pg = pg - num1 * 3;
        var num2 = parseInt(kp / 2);
        kp = kp - num2 * 2;
        console.log(1, pg, kp)
        console.log(2, num1, num2)
        count += num1;
        count += num2;

        pg += (num1 + num2);
        kp += (num1 + num2);
        console.log(3, count, pg, kp)
        if (pg < 3 && kp < 2) {
            return;
        }
        back(0, pg, kp);
    }
};
console.log(sum(20));