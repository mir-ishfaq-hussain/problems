/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum =0
let max = Number.MIN_SAFE_INTEGER
for(let num of nums){
    let c = sum + num
    if(c>0){
        sum = c
    }
    else{
        sum=0
    }
    if(c>max){
        max = c
    }
}

return max
};