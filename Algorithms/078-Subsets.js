/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
数组：方法一
 */
var subsets = function(nums) {
    var arr = [];
    var res = [
        []
    ];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0, reslen = res.length; j < res.length; j++) {
            arr[j] = [];
            arr[j].push(...res[j]);
        }
        for (var j = 0, arrlen = arr.length; j < arrlen; j++) {
            arr[j].push(nums[i]);
        }
        // console.log(arr);
        res.push(...arr);
    }
    arr = null;
    return res;
};
var a = [1, 2, 3];
console.log(subsets(a));

/*
位运算：方法二
 */
var subsets = function(nums) {
    var len = nums.length;
    var res = [];
    var max = 2 ** len;
    for (var i = 0; i < max; i++) {
        var str = i.toString(2).padStart(len, 3);
        var arr = [];
        for (var j = len - 1; j >= 0; j--) {
            var s = str[j];
            if (s === '1') arr.unshift(nums[j]);
            if (s === '2') break;
        }
        res.push(arr);
    }
    return res;
};
var a = [2, 3, 4]
console.log(subsets(a));

/*
回溯：方法三
 */
var subsets = function(nums) {
    let list = []
    nums.sort()
    backtrack(list, new Array(), nums, 0);
    return list
};

function backtrack(list, tempList, nums, start) {
    list.push(tempList.slice());
    for (let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        console.log(tempList + ',cg');
        backtrack(list, tempList, nums, i + 1);
        console.log(tempList);
        tempList.pop()
    }
}
var a = [4, 5, 6]
console.log(subsets(a));