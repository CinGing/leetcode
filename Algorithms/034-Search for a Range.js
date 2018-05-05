/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var min = 0;
    var max = A.length-1;
    var mid = 0;
    var result = [-1, -1];
    
    if(A.length == 0){
        return result;
    }
    
    
    while(min <= max){
        mid = (min+max)/2;
        
        if(target == A[mid]){
            var start = mid;
            var end = mid;
            
            while(start - 1 >= 0 && target == A[start-1]){
                start--;
            }
            while(end + 1 < A.length && target == A[end + 1]){
                end++;
            }
            
            result[0] = start;
            result[1] = end;
            return result;
        }
        
        if(target < A[mid]){
            max = mid-1;
        }else{
            min = mid+1;
        }
    }
    
  return result;  
};
var a = [1,2,3,3,4,4]
console.log(searchRange(a,3))