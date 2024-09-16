/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=-1;
let j =0;
while(j<nums.length){
    if(nums[j]===0 & i===-1){
       
        i=j
    }
    else if(nums[j]!==0 & i!==-1){
        let s = nums[i]
            nums[i]=nums[j]
            nums[j]=s
            i++
         
            
        }
    
    j++
}

    
};