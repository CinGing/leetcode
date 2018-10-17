/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Set去掉重复元素集合
var containsDuplicate = function(nums) {
    // nums.sort();
    // if(nums.length < 2) return false;
    // for(var i = 1;i<nums.length;i++){
    // 	if(nums[i]===nums[i-1]) return true;
    // }
    // return false;
    
    return new Set(nums).size == nums.length ? false : true;
};
console.log(containsDuplicate([1]));