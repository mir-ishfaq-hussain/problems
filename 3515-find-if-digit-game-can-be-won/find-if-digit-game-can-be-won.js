/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let doubleSum =0
let singleSum =0
for(let n of nums){
    const result = Math.floor(n/10)
    if(result>0){
        doubleSum =doubleSum+n
    }
    else{
        singleSum = singleSum+n
    }
}
if(doubleSum>singleSum || singleSum >doubleSum){
    return true
}
return false
    
};