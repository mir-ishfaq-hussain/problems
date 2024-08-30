/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    
  let profit = 0;
  let buyPrice = arr[0];
  for (let a of arr) {
    if (a < buyPrice) {
      buyPrice = a;
    }
    if (a - buyPrice > profit) {
      profit = a - buyPrice;
    }
  }
  return profit;

};