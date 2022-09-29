function maxProfit(prices) {
    let left = 0, right = 1, maxProfit = 0;
    while (right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right
        }
        right += 1
    }
    console.log(maxProfit)
}

maxProfit([7,1,5,3,6,4])

// Time complexity = O(n)
// Space complexity = O(1)