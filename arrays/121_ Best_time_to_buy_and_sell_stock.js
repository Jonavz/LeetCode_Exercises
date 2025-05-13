/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxFit = 0 

    for(let i=1; i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }else{
            let temp = prices[i] - minPrice
            if(temp > maxFit){
                maxFit = temp
            }
        }
    }

    return maxFit
};