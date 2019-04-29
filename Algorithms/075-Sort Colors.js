function sort(arr) {
    var n = arr.length
    var i = 0;
    var j = 0;
    var k = n - 1;
    //i k 都在最前和最后。只有当0，len-1 分别为0 2时，才各自+1，-1
    //全程j遍历
    while (j <= k) {
        if (arr[j] == 1) {
            j++
        } else if (arr[j] == 0) {
        	//i j交换
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++
            j++
        } else {
        	//j k交换
            var temp = arr[k];
            arr[k] = arr[j];
            arr[j] = temp;
            k--;
        }
    }
    return arr
}
var a = [2, 1, 0, 2, 0, 1, 2, 0]
var b = [2,1,0]
console.log(sort(a))