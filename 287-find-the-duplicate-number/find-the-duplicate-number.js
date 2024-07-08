/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let hash = {}
    let duplicate
    for(let num of nums){
        if(!hash[num]){
            hash[num]=1
        }else{
            return num
        }
    }
    
};