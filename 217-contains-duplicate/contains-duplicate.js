/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
let dup = {}
    let duplicate = false
    for(let num of nums){
        if(dup[num]){
            duplicate = true
            break;
        }
        dup[num] = true
    }
    return duplicate
};