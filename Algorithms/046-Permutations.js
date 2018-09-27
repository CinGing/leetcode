/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [];
    backtrack(res, new Array(), nums)
    return res;

    function backtrack(res, templist, nums) {
        if (nums.length === templist.length) {
            res.push(templist.slice());
        } else {
            for (var i = 0; i < nums.length; i++) {
                if (templist.indexOf(nums[i]) != -1) continue;
                templist.push(nums[i]);
                backtrack(res, templist, nums);
                templist.pop();
            }
        }

    }
};


var a = [1, 2, 3]
// for(var i = 0;i<3;i++){
// 	if(a.indexOf(a[i])!=-1) console.log(a[i]);
// }
console.log(permute(a));