/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {

    let i=0
    let j = 1
    let reArranged = []
    for(let num of nums){
        if(num>=0){
            reArranged[i] = num
            i = i +2
        }
        else{
            reArranged[j]=num
            j = j+2
        }
    }
    
    return reArranged
};