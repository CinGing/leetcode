/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var a = m - 1;
    var b = n - 1;
    var c = m + n - 1;
    while (a >= 0 && b>=0) {
        if (nums1[a] >= nums2[b])
            nums1[c--] = nums1[a--];
        else
            nums1[c--] = nums2[b--];
    }
    while (a >= 0) {
        nums1[c--] = nums1[a--];
    }
    // while (b >= 0 && a < 0) {
    //     nums1[c--] = nums2[b--];
    // }
    return nums1;
};

var test1 = [];
var test2 = [1];
console.log(merge(test1, 0, test2, 1));
