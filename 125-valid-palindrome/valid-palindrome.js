/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const result = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let i=0
let j = result.length-1
let palindrome=true
while(i<result.length){
    if(result[i]!==result[j]){
        palindrome = false
        break
    }
    j--
    i++
}
return palindrome
};