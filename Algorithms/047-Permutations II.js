/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var res = [];
    nums.sort();
    backtrack(res, new Array(), nums, new Boolean(nums.length))
    return res;

    function backtrack(res, templist, nums, used) {
        if (templist.length === nums.length) {
            res.push(templist.slice());
        } else {
            for (var i = 0; i < nums.length; i++) {
                if (used[i] || i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
                used[i] = true
                // console.log(nums[i])
                templist.push(nums[i])
                backtrack(res, templist, nums, used)
                used[i] = false
                templist.pop()
            }
        }
    }
};
var a = [3,3,0,3];
console.log(permuteUnique(a)) 