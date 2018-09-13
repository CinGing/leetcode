/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    if (m > n) { // to ensure m<=n
        var temp = nums1;
        nums1 = nums2;
        nums2 = temp;
        var tmp = m;
        m = n;
        n = tmp;
    }
    console.log(temp);
    var iMin = 0,
        iMax = m,
        halfLen = parseInt((m + n + 1) / 2);
        console.log(halfLen);
    while (iMin <= iMax) {
        var i = parseInt((iMin + iMax) / 2);
        var j = halfLen - i;
        if (i < iMax && nums2[j - 1] > nums1[i]) {
            iMin = i + 1; // i is too small
        } else if (i > iMin && nums1[i - 1] > nums2[j]) {
            iMax = i - 1; // i is too big
        } else { // i is perfect
            var maxLeft = 0;
            if (i == 0) { maxLeft = nums2[j - 1]; } else if (j == 0) { maxLeft = nums1[i - 1]; } else { maxLeft = Math.max(nums1[i - 1], nums2[j - 1]); }
            if ((m + n) % 2 == 1) { return maxLeft; }

            var minRight = 0;
            if (i == m) { minRight = nums2[j]; } else if (j == n) { minRight = nums1[i]; } else { minRight = Math.min(nums2[j], nums1[i]); }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
};
var a = [1, 5, 7, 9];
var b = [2, 4, 6, 8];
console.log(findMedianSortedArrays(a, b));